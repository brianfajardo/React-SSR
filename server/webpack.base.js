module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', { targets: { browsers: ['last 2 versions'] } }],
            'react',
            'stage-0',
          ],
          plugins: ['transform-object-rest-spread'],
        },
      },
    ],
  },
}
