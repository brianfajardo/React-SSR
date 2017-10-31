const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackNodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base')

const serverConfig = {
  // By default, Webpack creates a bundle for the browser.
  // For server-side rendering we build a bundle for Node
  target: 'node',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  // webpackNodeExternals excludes node_modules from the server bundle.
  // By not bloating NPM, we can optimize the speed of Webpack in development
  externals: [webpackNodeExternals()],
}

// Outputs a build bundle which transpiles our JSX on the server so we
// can perform server-side rendering of React. This bundle.js is what we
// actually execute on Node to run our server.
module.exports = webpackMerge(baseConfig, serverConfig)
