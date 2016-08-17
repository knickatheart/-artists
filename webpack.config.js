var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, 'dist/js')
var APP_DIR = path.join(__dirname, 'js')

var config = {
  entry: {
    'app': APP_DIR + '/root.js'
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loaders: ['babel']
      }
    ]
  }
};

module.exports = config;