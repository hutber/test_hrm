/* eslint-disable */
const Config = require('webpack-config').default;
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const {environment} = require('webpack-config');
const path = require('path');

environment.set('cssIdent', '[path]___[name]__[local]___[hash:base64:5]');

module.exports = new Config().extend('./webpack.base.config.js').merge({
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './src/index.js'
  ],
  devServer: {
    contentBase: [
      'demo/'
    ],
    historyApiFallback: true,
    host: '0.0.0.0',
    publicPath: '/dist/'
  },
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BABEL_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new DashboardPlugin()
  ],
  cache: true
});
