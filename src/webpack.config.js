var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    Btn: './components/Btn.vue',
    CheckBox: './components/CheckBox.vue',
  },
  output: {
    path: path.resolve(__dirname, '../dist/js'),
    filename: '[name].js'
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
      // new webpack.optimize.CommonsChunkPlugin({
      //     name: "commons",
      //     filename: "commons.js",
      //     chunks: ["CheckBox", "btn"],
      // }),
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
