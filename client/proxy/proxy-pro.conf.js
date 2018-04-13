const setUpCorporateProxy = require('./setup-corporate-proxy');

const proxyConfig = [{
  "context": [
    "/api",
    "/bko"
  ],
  "target": "http://host:port",
  "secure": false,
  "changeOrigin": true,
  "logLevel":"debug"
}];

module.exports = setUpCorporateProxy(proxyConfig);
