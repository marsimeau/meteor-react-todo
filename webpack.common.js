const meteorExternals = require('webpack-meteor-externals')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  devServer: {
    hot: true
  },
  resolve: {
    plugins: [
      new DirectoryNamedWebpackPlugin()
    ]
  },
  externals: [
    meteorExternals()
  ],
  devtool: isDev && 'eval-source-map'
}
