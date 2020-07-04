/* global isDev */
const meteorExternals = require('webpack-meteor-externals')

// Import .babelrc because of a bug causing it to be ignored
const babelConfig = require('./.babelrc')

module.exports = (isClient) => ({
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
          isClient && 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
              importLoaders: 1,
              onlyLocals: !isClient,
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
        ].filter(loader => loader)
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
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    hot: true
  },
  externals: [
    meteorExternals()
  ],
  devtool: isDev && 'eval-source-map'
})
