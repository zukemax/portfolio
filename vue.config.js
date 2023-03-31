const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api':{
        target: 'https://jovial-macaron-daff9d.netlify.app:3000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {'^/api':'/'}
      }
    }
  }
})
