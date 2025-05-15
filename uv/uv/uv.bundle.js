// Ultra simplified UV bundle placeholder
// Real UV bundle is huge, but this lets GitHub Pages run basic proxying

if (!window.location.pathname.startsWith(__uv$config.prefix)) {
  // Not a proxy path, do nothing
} else {
  // Decode target URL from path
  const encodedPart = window.location.pathname.replace(__uv$config.prefix, "");
  const targetUrl = __uv$config.decodeUrl(encodedPart);

  // Redirect browser to target URL for demo (real UV replaces content via service worker)
  window.location.href = targetUrl;
}
