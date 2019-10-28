const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: isProduction ? 'https://api.greenpeace.org.hk/2019/elm/' : '',
  configureWebpack: config => {
    config.output.filename = 'js/[name].js'
    config.output.chunkFilename = 'js/[name].js'
  },
  chainWebpack: config => {
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css',
          },
        ])
    }
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production' ? true : false,
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/scss/global.scss";
        `,
      },
    },
  },
}
