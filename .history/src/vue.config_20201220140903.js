module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
      open: true,
      overlay: {
          warnings: false,
          errors: true
      },
      proxy: {
          '/api': {
              target: `http://139.9.129.143:8080/`,
              changeOrigin: true,
              pathRewrite: {
              '^/api': ''
              },
          },
      }
  }
}
