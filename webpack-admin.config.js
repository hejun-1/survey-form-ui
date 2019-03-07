const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack-base.config.js');
const path = require('path');

module.exports = function () {
  return webpackMerge(baseConfig, {
    entry: {
      main: ['./src/admin-application.jsx'],
      vendor: ['react']
    },
    output: {
      filename: 'bundle.js',
      chunkFilename: '[id].chunk.js',
      path: path.resolve('./dist'),
      publicPath: '/'
    }
  });
};
