const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'index.js',
  },
};
