export 默认 {
  async fetch(request, env) {
    let url = new URL(request.url);
    
    if (url.pathname.startsWith('/')) {
      // 1. 直接使用目标真实的域名，不要用 IP
      url.hostname = "dsjbhnjfdnsds561fd251sa51df515ds1d5sf1d5dsadfdg21315941565dc.011217.xyz"; 
      url.port = "8080"; // 如果确实需要指定端口
      
      let new_request = new Request(url, request);
      
      try {
        return await fetch(new_request);
      } catch (error) {
        return new Response("Worker Fetch 失败: " + error.message, { status: 502 });
      }
    }
    
    return env.ASSETS.fetch(request);
  }
};
