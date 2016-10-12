var path = require('path')
var webpack = require('webpack')
var vueHelper = require('./vueHelper')

module.exports = {
  entry: './app/boot.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'app.js'
  },
  resolve: {
    symlinks: true,
    extensions: ['.js', '.vue',  '.scss'],
    modules: [
      "node_modules",
    ],
    'alias': {
      // vue: path.resolve(__dirname, './node_modules/vue'),
      // 'vue-loader': path.resolve(__dirname, './node_modules/vue-loader'),
      // 'vue-hot-reload-api': path.resolve(__dirname, './node_modules/vue-hot-reload-api'),
      // 'vue-style-loader': path.resolve(__dirname, './node_modules/vue-style-loader'),
      // 'vue-template-compiler': path.resolve(__dirname, './node_modules/vue-template-compiler'),
    },
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, './node_modules'),
      "node_modules",
    ],
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
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
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
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 9090,
  },
  devtool: '#inline-source-map',
  plugins:[
     new webpack.LoaderOptionsPlugin({
       options: {
          sassLoader: {
            includePaths: [
              path.resolve(__dirname, "../scss"),
              path.resolve(__dirname, "../"),
            ],
          },
          vue: {
            loaders: vueHelper.cssLoaders()
          },
       }
     })
  ],
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
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ])
}
