const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')(true)
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  entry: './client/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/main.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
