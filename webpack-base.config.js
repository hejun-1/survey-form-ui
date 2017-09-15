const webpack = require('webpack');
const ENDPOINT = process.env.ENDPOINT || 'http://0.0.0.0:9190/api';

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ENDPOINT': JSON.stringify(ENDPOINT)
    }),
  ],
  devServer: {
    historyApiFallback: true,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react',"stage-3"]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
