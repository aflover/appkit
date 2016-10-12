var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    'veak': './index.js',
  },
  output: {
    library: "veak", // string,
    libraryTarget: "umd", // enum
    path: path.resolve(__dirname, '../dist/js'),
    filename: process.env.BUILD_RELEASE ? '[name].js' : '[name]-dev.js'
  },
  resolve: {
    extensions: ['.js', '.vue',  '.scss'],
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 9090,
  },
  devtool: '#inline-source-map',
  plugins:[
  ],
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
  ])
}

if (process.env.BUILD_RELEASE) {
  module.exports.devtool='';
}
