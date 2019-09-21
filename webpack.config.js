const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './assets/js/index.js',
  watch: true,
  plugins: [
    new CopyPlugin([
      { from: 'source', to: 'dest' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          },
        ],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'index.js'
  }
}
