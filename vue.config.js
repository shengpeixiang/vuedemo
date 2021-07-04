// Vue.config.js
const publicPath = "./"
module.exports = {
    productionSourceMap: false,
    publicPath:publicPath,
    devServer: {
      proxy: {
        '/api': {
          target: 'http://39.103.206.77:8888'
        },
      },
    },
    configureWebpack: (config)=>{
        if(process.env.NODE_ENV === 'production'){
          config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
    }
}