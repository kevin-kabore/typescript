module.exports = {
  entry: './app.ts',
  output: {
    filename: 'bundle.js'
  },
  module: {
    // module loader
    loaders: [
      // single loader as js object
      { test: /\.ts$/, loader: 'ts-loader' } // test all typescript files are compiled through ts-loader
    ]
  }
};
