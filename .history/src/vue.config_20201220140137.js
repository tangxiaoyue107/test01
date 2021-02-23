module.exports = {
  // //基本路径
  // publicPath:'./',
  // //输出文件目录
  // outputDir:'dist',
  // lintOnSave:true,
  // assetsDir:'static'
  
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
          '/API': {
              target: `http://139.9.129.143:8080`,
              secure: false,
              changeOrigin: true,
              pathRewrite: {
              '^/API': ''
              },
          },
          // '/loginApi': {
          //     target: `后端接口前缀`,
          //     secure: false,
          //     changeOrigin: true,
          //     pathRewrite: {
          //     '^/loginApi': ''
          //     },
          // }
      }
  }
}
