var AsyncModulePlugin = require('async-module-loader/plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: './bin',
		filename: 'app.js'
	},
	plugins: [
		new AsyncModulePlugin()
	]
};