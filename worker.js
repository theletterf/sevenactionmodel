const HTML_MEDIA_TYPE = "text/html; charset=utf-8";
const MARKDOWN_MEDIA_TYPE = "text/markdown; charset=utf-8";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

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
  },
};

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
  const mirrorPath = markdownMirrorPath(url.pathname);
  if (!mirrorPath) {
    return null;
  }
  const mirrorURL = new URL(url.toString());
  mirrorURL.pathname = mirrorPath;
  const mirror = await env.ASSETS.fetch(new Request(mirrorURL.toString(), request));
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
