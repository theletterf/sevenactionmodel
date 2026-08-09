export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Keep one crawlable English home and one protocol.
    if (url.protocol !== "https:") {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/en" || url.pathname === "/en/") {
      url.pathname = "/";
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    const canonicalPath = canonicalHtmlPath(url.pathname);
    if (!response.ok || !canonicalPath) {
      return response;
    }

    const headers = new Headers(response.headers);
    headers.set("Link", `<${url.origin}${canonicalPath}>; rel="canonical"`);
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

function canonicalHtmlPath(pathname) {
  if (pathname.endsWith("/index.md")) {
    return pathname.slice(0, -"index.md".length);
  }
  if (pathname === "/llms.txt" || pathname === "/model.json") {
    return "/";
  }
  const localizedMirror = pathname.match(/^\/[a-z]{2}(?:-[a-z]{2})?\/(?:llms\.txt|model\.json)$/i);
  if (localizedMirror) {
    return pathname.replace(/(?:llms\.txt|model\.json)$/, "");
  }
  return null;
}
