const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')(true)

module.exports = merge(common, {
  entry: './client/main.js',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
