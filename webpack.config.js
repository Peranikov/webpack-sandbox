module.exports = {
  entry: './src/app.js',
  output: {
    path: "dist",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" }
    ]
  }
};
