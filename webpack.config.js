var path = require('path');
var SRC_DIR = path.join(__dirname, 'public/src');
var DIST_DIR = path.join(__dirname, 'public/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`, //not sure if I am using jsx yet
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};