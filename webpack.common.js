const merge = require('webpack-merge')
const meteorExternals = require('webpack-meteor-externals')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'

const common = {
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
  devtool: 'eval-source-map'
}

const development = merge(common, {
  // resolve: {
  //   alias: {
  //     'react-dom': '@hot-loader/react-dom'
  //   }
  // }
})

module.exports = isDev
  ? development
  : common
