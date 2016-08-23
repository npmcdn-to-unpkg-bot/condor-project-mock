var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var appDir = path.join(__dirname, 'app');

var config = {
	devtool: 'eval-source-map',
	entry: path.join(appDir, 'App.js'),	
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: appDir,
				loader: 'babel',
				query: {
					presets: ['es2015'],
				}
			},
			{
				test: /\.css$/,
				include: [appDir, path.join(__dirname, 'node_modules')],
				loader: ExtractTextPlugin.extract('css-loader')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	],
	devServer: {
		contentBase: path.join('.', 'public'),
		colors: true,
		inline: true
	}
};

module.exports = config;
