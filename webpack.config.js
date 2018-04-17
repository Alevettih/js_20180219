const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  mode: 'development',
  entry: './blocks/index.js',

  output: {
    path: path.resolve(__dirname, "./"),
    filename: "./app.js"
  },

  devtool: "source-map",
  watch: true,

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { "presets": ["env"]}
      },
      {
        test: /\.pug$/,
        loader: "pug-loader"
      }
    ]
  },

  plugins: [
    new WebpackNotifierPlugin(),
  ]
};
