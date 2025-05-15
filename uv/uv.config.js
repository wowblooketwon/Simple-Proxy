var __uv$config = {
  prefix: "/uv/",
  encodeUrl(url) {
    return btoa(url).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  },
  decodeUrl(url) {
    url = url.replace(/-/g, "+").replace(/_/g, "/");
    switch (url.length % 4) {
      case 2: url += "=="; break;
      case 3: url += "="; break;
    }
    return atob(url);
  }
};
