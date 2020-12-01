const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://admintest.happymmall.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
};