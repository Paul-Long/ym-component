const webpack = require('webpack');
const path = require('path');
const cpus = require('os').cpus().length;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const WebpackMd5Hash = require('webpack-md5-hash');
const happyThreadPool = HappyPack.ThreadPool({size: cpus});
const UglifyParallel = require('webpack-uglify-parallel');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const ENV = process.env.NODE_ENV;
const client = 'src/client';
const config = {
  entry: {
    main: path.resolve(__dirname, client, 'app.js'),
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].[id].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'util': path.resolve(__dirname, client, 'util'),
      'theme': path.resolve(__dirname, client, 'theme'),
      'containers': path.resolve(__dirname, client, 'containers'),
      'constants': path.resolve(__dirname, client, 'constants')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, './src/client'),
          path.resolve(__dirname, './src/components')
        ],
        use: 'happypack/loader?id=js'
      }, {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader']
        })
      }, {
        test: /\.(png|jpe?g|gif)$/,
        include: path.resolve(__dirname, './src/client'),
        use: 'url-loader?limit=100&name=img/[name].[hash:8].[ext]'
      }, {
        test: /\.(ttf)$/,
        include: path.resolve(__dirname, './src/client'),
        use: 'url-loader?limit=100&name=fonts/[name].[hash:8].[ext]'
      }
    ]
  },
  plugins: [
    new WebpackMd5Hash(),
    new CaseSensitivePathsPlugin(),
    new CleanPlugin([path.resolve(__dirname, 'dist')], {verbose: true}),
    new ExtractTextPlugin('[name].[contenthash:8].css', {allChunks: true}),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 10}),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10240}),
    new webpack.optimize.OccurrenceOrderPlugin,
    new webpack.optimize.CommonsChunkPlugin({name: 'common', chunks: ['main', 'vendor']}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: 'manifest.[hash:8].[id].js',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: ['babel-loader']
    }),
    new HappyPack({
      id: 'styles',
      threadPool: happyThreadPool,
      loaders: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
    }),
    new HtmlWebpackPlugin({
      title: 'YM',
      favicon: './src/server/static/images/favicon.ico',
      template: path.join(__dirname, 'src/server/template/index.html'),
      chunks: ['manifest', 'vendor', 'common', 'main'],
      chunksSortMode: function (chunk1, chunk2) {
        const order = ['manifest', 'common', 'vendor', 'main'];
        const order1 = order.indexOf(chunk1.names[0]);
        const order2 = order.indexOf(chunk2.names[0]);
        return order1 - order2;
      }
    })
  ]
};
if (ENV === 'develpoment') {
  config.devtool = 'eval-source-map';
  config.entry.main = ['webpack-hot-middleware/client?reload=true', path.join(__dirname, 'src/client/app.js')];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (ENV === 'production') {
  const UglifyJs = new UglifyParallel({
    workers: cpus,
    mangle: true,
    compressor: {
      warnings: false,
      drop_console: true,
      drop_debugger: true
    }
  });
  config.plugins.push(UglifyJs);

  //const isTest = true;
  //if (isTest) {
  //  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  //  config.plugins.push(new BundleAnalyzerPlugin());
  //}
}
module.exports = config;
