export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    
    if (url.pathname.startsWith('/')) {
      // 1. 设置协议为 http
      url.protocol = "http:"; 
      
      // 2. 设置目标网站的域名或 IP
      url.hostname = "dsjbhnjfdnsds561fd251sa51df515ds1d5sf1d5dsadfdg21315941565dc.011217.xyz"; // 例如: "example.com" 或 "192.168.1.100"
      
      // 3. 设置目标端口
      url.port = "8080"; // 替换为你需要的端口号

      // 创建新的请求对象
      let new_request = new Request(url, request);
      
      // 注意：有些目标服务器会校验 Host 头，如果报错 404 或阻拦，可以尝试强制重写 Host 头
      // new_request.headers.set("Host", "dsjbhnjfdnsds561fd251sa51df515ds1d5sf1d5dsadfdg21315941565dc.011217.xyz");

      return fetch(new_request);
    }
    
    // 否则，提供静态资产（如果适用）
    return env.ASSETS.fetch(request);
  }
};

