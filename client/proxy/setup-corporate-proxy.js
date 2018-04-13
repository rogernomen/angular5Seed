const HttpsProxyAgent = require('https-proxy-agent');

const setUpCorporateProxy = function(proxyConfig, proxyServer) {
    const envProxy = process.env.http_proxy || process.env.HTTP_PROXY;
    proxyServer = proxyServer || envProxy;
    if (proxyServer) {
      const agent = new HttpsProxyAgent(proxyServer);
      console.log('Using corporate proxy server: ' + proxyServer);
      proxyConfig.forEach(function(entry) {
        entry.agent = agent;
      });
    }
    return proxyConfig;
  };

module.exports = setUpCorporateProxy;
