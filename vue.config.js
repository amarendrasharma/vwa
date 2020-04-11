module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  devServer: {
    https: true
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  pwa: {
    workboxPluginMode: 'InjectManifest',
    name: 'Feel Same',
    themeColor: '#4A90E2',
    msTileColor: '#4A90E2',
    manifestOptions: {
      background_color: '#B8E986'
    }
  }
}