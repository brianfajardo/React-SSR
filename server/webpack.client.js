const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const clientConfig = {
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
}

module.exports = webpackMerge(baseConfig, clientConfig)
