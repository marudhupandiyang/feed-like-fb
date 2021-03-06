var webpack = require('webpack')

module.exports = {

  entry: [
    './src/index.jsx'
  ],
  output: {
    library: 'react-feeds',
    libraryTarget: 'umd',
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'index.js'
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      lodash: {
        root: '_',
        commonjs2: 'lodash',
        commonjs: 'lodash',
        amd: 'lodash',
      }
    }
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {}
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ]
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  node: {
    Buffer: false
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
}
