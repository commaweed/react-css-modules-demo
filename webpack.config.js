const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const styleLoader = {
   loader : 'style-loader',
   options : {
      sourceMap : debug ? true : false
   },
};

const cssLoader = {
   loader : 'css-loader',
   options : {
      modules : true,
      importLoader : 1,
      sourceMap : debug ? true : false,
      localIdentName : '[path]__[name]__[local]__[hash:base64:5]'
   },
};

const postcssLoader = {
   loader : 'postcss-loader',
   options : {
      sourceMap : debug ? true : false,
      plugins: [
          require('precss'),
          require('postcss-cssnext')
      ]
   }
};

const cssLoaders = debug 
   ? [ styleLoader, cssLoader, postcssLoader] 
   : ExtractTextPlugin.extract({
      fallback : styleLoader,
      loader : [ cssLoader, postcssLoader ],
      publicPath : 'dist'
   });

module.exports = {
   devtool : debug ? "inline-sourcemap" : false, // inline-sourcemap eval-source-map
   context : path.join(__dirname, "app"),
   entry : './app.jsx',
   output : {
      path : path.resolve(__dirname, 'dist'),
      filename : 'app.bundle.js'
   },
   module : {
      rules : [
            {
               test : /\.jsx?$/i,
               exclude : /node_modules/,
               loader : 'babel-loader',
               options : {
                  presets : [
                     'react', 'es2015'
                  ],
                  plugins : [
                     'react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'
                  ],
               }
            }, {
               test : /\.css$/i,
               use : cssLoaders
            }
      ]
   },
   plugins : [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'template.html'),
         title: 'css-loader-demo',
         filename: 'index.html',
         hash: true,
         minify: {
            collapseWhitespace: false,
            removeComments: false,
            useShortDocType: false
         }
      }),		
      new ExtractTextPlugin({
         filename : "app.bundle.css",
         disable : false,
         allChunks : true
      })
   ]
};
