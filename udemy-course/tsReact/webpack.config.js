module.exports = {
  entry: './src/index/tsx',
  output: {
    filename: './dist/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }]
  }
};
