const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/JS/script.js', 
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};