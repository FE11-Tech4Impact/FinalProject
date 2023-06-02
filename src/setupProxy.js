import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app) {
  app.use(
    '/api/v2/transaction',
    createProxyMiddleware({
      target: 'https://sandbox.ipaymu.com',
      changeOrigin: true,
      secure: false,
    })
  );

  app.use(
    '/api/v2/balance',
    createProxyMiddleware({
      target: 'https://sandbox.ipaymu.com',
      changeOrigin: true,
      secure: false,
    })
  );

  app.use(
    '/api/v2/history',
    createProxyMiddleware({
      target: 'https://sandbox.ipaymu.com',
      changeOrigin: true,
      secure: false,
    })
  );
};
