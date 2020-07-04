global.isDev = process.env.NODE_ENV !== 'production'

module.exports = [
  require('./webpack.client'),
  require('./webpack.server')
]
