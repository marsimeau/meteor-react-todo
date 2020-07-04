const meteorExternals = require('webpack-meteor-externals')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  devServer: {
    hot: true
  },
  externals: [
    meteorExternals()
  ],
  devtool: isDev && 'eval-source-map'
}
