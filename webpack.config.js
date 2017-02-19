const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoaders = debug ?
	[
		"style-loader?sourceMap",
		{
			loader: 'css-loader', 
			query: { 
				modules: true, 
				importLoader: 1, 
				sourceMap: true,
				localIdentName: '[path]__[name]__[local]__[hash:base64:5]'
			},
		},
		"resolve-url-loader"
	]
:
	// NOTE: build-prod not working yet with separate bundle.css file
	ExtractTextPlugin.extract({ 
		fallback: 'style-loader', 
		use: [
			{
				loader: 'css-loader',
				options: {
					modules: true,
					importLoader: 1,
					sourceMap: false,
					localIdentName: '[path]__[name]__[local]__[hash:base64:5]'
				}
			},
			'resolve-url-loader'
		]
	});


const createPlugins = function createPlugins() {
	let plugins = [
		new ExtractTextPlugin({
			filename: "bundle.css",
			disable: false,
			allChunks: false
		})
	];

	if (!debug) {

	}
};

module.exports = {
  devtool : debug ? "inline-sourcemap" : false, // inline-sourcemap  eval-source-map
	context : path.join(__dirname, "app"),
	entry: './app.jsx',
  output: {
		path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  },
  module: {
 		loaders : [
				{
					test : /\.jsx?$/i,
					exclude : /node_modules/,
					loader : 'babel-loader',
					query : {
						presets : [
								'react', 'es2015'
						],
						plugins : [
								'react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'
						],
					}
				}, {
					test : /\.css$/i,
					loaders : cssLoaders
				}
    ]
  },
  resolve: {
    modules: ['node_modules', 'app']
	},	
	plugins: createPlugins()
};
