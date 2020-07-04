const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'

// Import .babelrc because of a bug causing it to be ignored
const babelConfig = require('./.babelrc')

module.exports = merge(common, {
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
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
              importLoaders: 1,
              modules: {
                localIdentName: !isDev
                  ? '[hash:base64]'
                  : '[name]__[local]--[hash:base64:5]',
                mode: (resourcePath) => {
                  if (/styles\/[^/]+.scss$/i.test(resourcePath)) {
                    return 'global'
                  }

                  return 'local'
                }
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "imports/styles/abstracts";',
              sassOptions: {
                includePaths: [__dirname, 'imports']
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
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
  }
})
