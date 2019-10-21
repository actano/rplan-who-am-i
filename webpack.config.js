const isProductionMode = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProductionMode ? 'production' : 'development',
  entry: './index.js',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}
