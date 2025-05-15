function go() {
  const input = document.getElementById("url").value;
  const encodedUrl = __uv$config.encodeUrl(input);
  window.location.href = __uv$config.prefix + encodedUrl;
}
