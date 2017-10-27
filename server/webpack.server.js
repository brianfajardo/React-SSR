const path = require('path')
const webpack = require('webpack')

module.exports = {
  /* By default, Webpack creates a bundle for the browser.
     For server-side rendering we build a bundle for Node */
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            /* env is a kind of like a master preset in Webpack. Tells Babel
               to run all the transform rules that are needed to meet the
               requirements of the latest 2 versions of all popular browsers. */
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
    ],
  },
}
