const meteorExternals = require('webpack-meteor-externals')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

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
  ]
}
