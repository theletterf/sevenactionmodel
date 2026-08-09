const HTML_MEDIA_TYPE = "text/html; charset=utf-8";
const MARKDOWN_MEDIA_TYPE = "text/markdown; charset=utf-8";

/**
 * Fetch directives for the Content-Security-Policy.
 *
 * Nothing here loads from another origin — the stylesheet, both fonts, and the
 * social card all ship with the assets — so every fetch directive stays at
 * 'self'. `script-src` is the one compromise. The JSON-LD blocks in head.html
 * are rebuilt per page from that page's permalink, title, and modification
 * date, so their hashes differ at every URL and cannot be listed ahead of
 * time. Dropping 'unsafe-inline' would stop search engines and agents from
 * reading the structured data this site exists to publish. Per-request nonces
 * through HTMLRewriter would close the gap; until then the other directives
 * still cut off the injection routes that do not need inline script:
 * rewriting <base>, loading a plugin, posting a form elsewhere, and framing.
 */
const CSP_DIRECTIVES = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
];

const SECURITY_HEADERS = {
  // Two same-origin routes serve bytes that Hugo's HTML renderer never
  // sanitizes: the Markdown mirrors, which emit a page's raw source verbatim,
  // and the SVG favicon and social card. Refusing to sniff stops a browser
  // from ever deciding to read either one back as HTML.
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  // frame-ancestors covers this on current browsers; kept for the older ones.
  "X-Frame-Options": "DENY",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Permissions-Policy":
    "accelerometer=(), camera=(), display-capture=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Every response leaves through here — redirects, 404s from the asset
    // binding, and Markdown mirrors included — so no route can miss the
    // security headers by returning early.
    return withSecurityHeaders(await route(request, env, url), url);
  },
};

async function route(request, env, url) {
  // Keep one crawlable English home and one protocol. `wrangler dev` serves
  // plain HTTP on localhost, so exempt it or local runs redirect in a loop.
  if (url.protocol !== "https:" && !isLocalHost(url.hostname)) {
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }
  if (url.pathname === "/en" || url.pathname === "/en/") {
    url.pathname = "/";
    return Response.redirect(url.toString(), 301);
  }

  // An agent that asks for Markdown gets the mirror of the same page,
  // at the same URL, rather than HTML it has to strip.
  if (acceptsMarkdown(request)) {
    const mirror = await fetchMarkdownMirror(request, env, url);
    if (mirror) {
      return mirror;
    }
  }

  const response = await env.ASSETS.fetch(request);
  if (!response.ok) {
    return response;
  }
  return withAgentHeaders(response, url);
}

/**
 * Applied to every response. Responses from the asset binding and from
 * `Response.redirect` both carry immutable headers, so this rebuilds rather
 * than mutating in place.
 */
function withSecurityHeaders(response, url) {
  const local = isLocalHost(url.hostname);
  const headers = new Headers(response.headers);
  const directives = local
    ? CSP_DIRECTIVES
    : [...CSP_DIRECTIVES, "upgrade-insecure-requests"];

  headers.set("Content-Security-Policy", directives.join("; "));
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value);
  }
  // HSTS is scoped to a hostname, not a port: pinning it during `wrangler dev`
  // would force HTTPS on every other service the developer runs on localhost.
  if (!local) {
    headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
    );
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function isLocalHost(hostname) {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]";
}

function acceptsMarkdown(request) {
  return /\btext\/(x-)?markdown\b/i.test(request.headers.get("accept") || "");
}

/**
 * The Markdown mirror of a pretty URL: Hugo writes it next to index.html.
 * Only directory-style paths negotiate; asset paths are served as they are.
 */
function markdownMirrorPath(pathname) {
  return pathname.endsWith("/") ? `${pathname}index.md` : null;
}

async function fetchMarkdownMirror(request, env, url) {
  // Only reads negotiate. Forwarding the original request wholesale would
  // hand the asset binding a method and body it has no use for.
  if (request.method !== "GET" && request.method !== "HEAD") {
    return null;
  }
  const mirrorPath = markdownMirrorPath(url.pathname);
  if (!mirrorPath) {
    return null;
  }
  const mirrorURL = new URL(url.toString());
  mirrorURL.pathname = mirrorPath;
  const mirror = await env.ASSETS.fetch(
    new Request(mirrorURL.toString(), {
      method: request.method,
      headers: request.headers,
    }),
  );
  if (!mirror.ok) {
    return null;
  }
  const headers = new Headers(mirror.headers);
  headers.set("Content-Type", MARKDOWN_MEDIA_TYPE);
  headers.set("Link", `<${url.origin}${url.pathname}>; rel="canonical"`);
  headers.set("Vary", "Accept");
  return new Response(mirror.body, {
    status: mirror.status,
    statusText: mirror.statusText,
    headers,
  });
}

/**
 * Declare the charset, type the Markdown mirrors, and point every
 * non-HTML representation back at the page it mirrors.
 */
function withAgentHeaders(response, url) {
  const headers = new Headers(response.headers);
  const contentType = headers.get("content-type") || "";

  if (contentType.startsWith("text/html")) {
    headers.set("Content-Type", HTML_MEDIA_TYPE);
    headers.set("Vary", "Accept");
  } else if (url.pathname.endsWith(".md")) {
    headers.set("Content-Type", MARKDOWN_MEDIA_TYPE);
  }

  const canonicalPath = canonicalHtmlPath(url.pathname);
  if (canonicalPath) {
    headers.set("Link", `<${url.origin}${canonicalPath}>; rel="canonical"`);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function canonicalHtmlPath(pathname) {
  if (pathname.endsWith("/index.md")) {
    return pathname.slice(0, -"index.md".length);
  }
  if (
    pathname === "/llms.txt" ||
    pathname === "/model.json" ||
    pathname === "/sitemap.md" ||
    pathname === "/AGENTS.md"
  ) {
    return "/";
  }
  const localizedMirror = pathname.match(
    /^\/[a-z]{2}(?:-[a-z]{2})?\/(?:llms\.txt|model\.json|sitemap\.md)$/i,
  );
  if (localizedMirror) {
    return pathname.replace(/(?:llms\.txt|model\.json|sitemap\.md)$/, "");
  }
  return null;
}
