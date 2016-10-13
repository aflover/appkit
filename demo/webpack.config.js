var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractCSS = new ExtractTextPlugin('app.css');

module.exports = {
  entry: './src/boot.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    filename: 'app.js'
  },
  resolve: {
    'alias': {
      // 'veak$': path.resolve(__dirname, '../dist/js/veak-min.js'), // use min version
      'veak': path.resolve(__dirname, '../'),
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
          // /vue/,  // vue do not need babel-loader
        ]
      },
      {
        test: /\.css$/,
        // loader: 'style!css', // without extract
        loader: extractCSS.extract(['css'])
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: 'imgs/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'fonts/[name].[ext]?'
        }
      }
    ]
  },
  devtool: '#inline-source-map',
  plugins:[
    extractCSS
  ]
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
