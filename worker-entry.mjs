export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      url.pathname = "/index.html";
    }

    if (!env.ASSETS) {
      return new Response("Static asset binding is unavailable.", { status: 503 });
    }

    return env.ASSETS.fetch(new Request(url, request));
  },
};
