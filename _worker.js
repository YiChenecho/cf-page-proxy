export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    
    if (url.pathname.startsWith('/')) {
      // 1. 如果源站是 HTTP 服务，必须将协议改为 http:
      // 防止原始请求是 https 时去请求 https://裸IP 导致 fetch 崩溃
      url.protocol = "http:"; 
      
      // 2. 使用 .host 同时包含 IP 和端口（或者分开设置 url.hostname 和 url.port）
      url.host = "212.50.250.152:8080"; 
      
      let new_request = new Request(url, request);
      
      // 3. 增加 try...catch 捕获异常，防止 Worker 直接崩溃报 1019
      try {
        return await fetch(new_request);
      } catch (error) {
        return new Response("Worker Fetch 请求失败: " + error.message, { status: 502 });
      }
    }
    
    // 否则，提供静态资产
    return env.ASSETS.fetch(request);
  }
};
