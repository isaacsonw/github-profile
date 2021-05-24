const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    // app: ['@babel/polyfill', './src/index.js'],
    app: glob.sync('./src/**/*.js'),
  },
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        use: ['url-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        token: process.env.token,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new OptimizeCssAssetsPlugin()],
  },
};

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

// module.exports = {
//   entry: './src/index.js',
//   mode: 'production',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'bundle.js',
//   },
//   plugins: [new MiniCssExtractPlugin()],
//   module: {
//     rules: [
// {
//   test: /\.css$/,
//   use: [MiniCssExtractPlugin.loader, 'css-loader'],
// },
// {
//   test: /\.(svg|gif|png|eot|woff|ttf)$/,
//   use: ['url-loader'],
// },
//       {
//         test: /\.js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//     ],
//   },
// optimization: {
//   minimize: true,
//   minimizer: [
//     // new TerserPlugin({
//     //   extractComments: false,
//     // }),
//     new OptimizeCssAssetsPlugin(),
//   ],
// },
// };
