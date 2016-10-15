var path = require('path')
var webpack = require('webpack');

module.exports = {
  entry: './src/boot.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
    filename: 'js/app.js'
  },
  resolve: {
    'alias': {
      // 'veak$': path.resolve(__dirname, '../src'), // use source version
      // 'veak$': path.resolve(__dirname, '../dist/js/veak.min.js'), // use min version
      'veak': path.resolve(__dirname, '../'),
      'vue' : path.resolve(__dirname, './node_modules/vue'),
    },
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
        exclude: [
          /node_modules/,
          /veak/, // skip babel-loader
          /vue/,  // vue do not need babel-loader
        ]
      },
      {
        test: /\.css$/,
        loader: 'style!css', // without extract
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'fonts/[name].[ext]?'
        }
      },
    ]
  },
  devServer: {
    publicPath:'/dist/',
  },
  devtool: '#inline-source-map',
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = ''
  // module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
  ])
}
