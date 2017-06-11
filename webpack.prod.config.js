/* eslint-disable filenames/match-regex, import/no-commonjs, import/unambiguous */
const Config = require('webpack-config').default;
const webpack = require('webpack');
const {environment} = require('webpack-config');
const path = require('path');


environment.set('cssIdent', '[local]_[hash:base64:5]');

module.exports = new Config().extend('./webpack.base.config.js').merge({
  entry: [
    './src/index.js'
  ],
  devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'app/www'),
    publicPath: '/app/www'
  },
});
