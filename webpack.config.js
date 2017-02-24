module.exports = {
  entry: './src/app.js',
  output: {
    path: "dist",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ],
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader",
        ],
      },
    ],
  }
};
