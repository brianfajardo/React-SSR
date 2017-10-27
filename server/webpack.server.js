const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackNodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base')

const serverConfig = {
  /* By default, Webpack creates a bundle for the browser.
     For server-side rendering we build a bundle for Node */
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  /* webpackNodeExternals excludes node_modules from the server bundle.
     By not bloating NPM, we can optimize the speed of Webpack in development */
  externals: [webpackNodeExternals()],
}

module.exports = webpackMerge(baseConfig, serverConfig)
