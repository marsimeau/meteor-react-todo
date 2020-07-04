const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  entry: [
    './server/main.js'
  ],
  target: 'node'
})
