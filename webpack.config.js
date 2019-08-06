const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function  resolve (str) {
  return path.join(__dirname, './', str)  
}

module.exports = {
  entry: {
    app: resolve('src/index.js')
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[hash].js'
  },
  devServer: {
    port: 8888,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html')
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader/useable',
      //     'vue-style-loader',
      //     'css-loader'
      //   ]
      // },

      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? MiniCssExtractPlugin.loader
            : 'vue-style-loader',
          'css-loader',
          'postcss-loader',
        ]
      },

      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': resolve('src/pages')
    },
    extensions: ['.js', '.json', '.vue']
  }
}
