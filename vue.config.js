'use strict'
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: "https://localhost.com:8080",
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}