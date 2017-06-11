/* eslint-disable filenames/match-regex, import/no-commonjs, import/unambiguous */

const path = require('path');
const {environment} = require('webpack-config');

module.exports = {
  module: {
    loaders: [
      {
        test: /dashjs\/dist\/.*/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/.*/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000'
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', 'svg-react-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?sourceMap',
            query: {
              modules: true,
              sourceMap: true,
              importLoaders: 2,
              localIdentName: environment.get('cssIdent')
            }
          },
          'postcss-loader?sourceMap&parser=postcss-scss'
        ],
      },
      // Font Definitions
      { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=./font/[name].[ext]' },
      { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=./font/[name].[ext]' },
      { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=./font/[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=./font/[name].[ext]' },
      { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=./font/[name].[ext]' }
    ]
  }
};
