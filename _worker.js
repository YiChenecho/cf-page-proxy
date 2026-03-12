export 默认 {
  async fetch(request, env) {
    let url = new URL(request.url);
    
    if (url.pathname.startsWith('/')) {
      url.protocol = "http:"; 
      url.host = "212.50.250.152:8080"; 
      
      // 复制原始请求
      let new_request = new Request(url, request);
      
      // 强制覆盖 Host 请求头为真实的域名
      new_request.headers.set("Host", "metatube.kfcv50.de"); 
      
      try {
        return await fetch(new_request);
      } catch (error) {
        return new Response("Worker Fetch 失败: " + error.message, { status: 502 });
      }
    }
    
    return env.ASSETS.fetch(request);
  }
};
