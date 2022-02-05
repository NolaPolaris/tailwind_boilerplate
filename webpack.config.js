const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const prod = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    project: path.resolve(__dirname, 'src') + '/js/index.js',
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[chunkhash:3].js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }        
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/inline',   
      },      
      {
        test: /\.(woff2|ttf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }        
      },      
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: true } },
          "postcss-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },      
    ],
  },
  optimization: {
    minimize: prod,
    minimizer: [
      new ESBuildMinifyPlugin({
        css: true
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  mode: prod ? 'production' : 'development',
  stats: prod ? 'normal' : 'minimal'
};

module.exports = config;