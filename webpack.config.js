const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const meteorExternals = require('webpack-meteor-externals')

// Hack: since .babelrc is ignored (bug) we import here
const babelConfig = require('./.babelrc')

const clientConfig = {
  entry: './client/main.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/main.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  externals: [
    meteorExternals()
  ],
  devServer: {
    hot: true
  }
}

const serverConfig = {
  entry: [
    './server/main.js'
  ],
  target: 'node',
  devServer: {
    hot: true
  },
  externals: [
    meteorExternals()
  ]
}

module.exports = [clientConfig, serverConfig]
