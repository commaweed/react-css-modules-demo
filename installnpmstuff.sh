!#/bin/bash 
clear

# install webpack and supporting plugins
npm install -D webpack webpack-dev-server
npm install -D html-webpack-plugin extract-text-webpack-plugin@beta

# npm scripting utilities
npm install -D rimraf

# install babel transpiler
npm install -D babel-core babel-loader
npm install -D babel-plugin-add-module-exports
npm install -D babel-plugin-react-html-attrs babel-plugin-transform-class-properties babel-plugin-transform-decorators-legacy
npm install -D babel-preset-es2015 babel-preset-react

# install file loaders
npm install -D file-loader url-loader resolve-url-loader

# install css loaders
npm install -D style-loader css-loader
npm install -D react-css-modules postcss-modules postcss-cssnext precss 

# install react / bootstrap / redux
npm install -S react react-dom react-router



