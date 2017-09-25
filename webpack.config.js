var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./js/app.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015',],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "app.min.js"
  },
};