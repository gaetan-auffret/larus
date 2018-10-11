const path = require('path');

module.exports = {
  entry: './src/larus/ids.js',
  output: {
	  filename: 'larus.js',
	  path: path.resolve(__dirname, 'dist')
  }
};
