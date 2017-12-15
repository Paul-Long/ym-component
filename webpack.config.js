const webpack = require('webpack');
const path = require('path');
const cpus = require('os').cpus().length;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack');
const WebpackMd5Hash = require('webpack-md5-hash');
const happyThreadPool = HappyPack.ThreadPool({size: cpus});
const UglifyParallel = require('webpack-uglify-parallel');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ENV = process.env.NODE_ENV;
const client = 'src/client';
const mobile = 'src/mobile';
const server = 'src/server';
const config = {
  cache: true,
  entry: {
    main: path.resolve(__dirname, client, 'app.js'),
    mobile: path.resolve(__dirname, mobile, 'mobile.js'),
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].[id].js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'client': path.resolve(__dirname, client),
      'routes': path.resolve(__dirname, client, 'routes'),
      'app@components': path.resolve(__dirname, client, 'components'),
      'app@utils': path.resolve(__dirname, client, 'utils'),
      '@app': path.resolve(__dirname, client, 'container'),
      '@examples': path.resolve(__dirname, client, 'examples'),
      '@blog': path.resolve(__dirname, client, 'blog'),
      '@bookmark': path.resolve(__dirname, client, 'bookmark'),
      '@admin': path.resolve(__dirname, client, 'admin'),
      'mobile': path.resolve(__dirname, mobile),
      'm@container': path.resolve(__dirname, mobile, 'container'),
      'utils': path.resolve(__dirname, 'src/utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, client),
          path.resolve(__dirname, mobile),
          path.resolve(__dirname, server),
          path.resolve(__dirname, 'src/utils'),
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
        include: [
          path.resolve(__dirname, './src/client')
        ],
        use: 'url-loader?limit=100&name=img/[name].[hash:8].[ext]'
      }, {
        test: /\.(ttf|svg|eot|woff)$/,
        include: [
          path.resolve(__dirname, './src/client'),
          path.resolve(__dirname, './src/components')
        ],
        use: 'url-loader?limit=100&name=fonts/[name].[hash:8].[ext]'
      }
    ]
  },
  plugins: [
    new WebpackMd5Hash(),
    new CaseSensitivePathsPlugin(),
    new CleanPlugin([path.resolve(__dirname, 'dist')], {verbose: true}),
    new ExtractTextPlugin({filename: '[name].[contenthash:8].css', allChunks: true}),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 10}),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10240}),
    new webpack.optimize.OccurrenceOrderPlugin,
    new webpack.optimize.CommonsChunkPlugin({name: 'common', chunks: ['main', 'mobile', 'vendor']}),
    new webpack.optimize.CommonsChunkPlugin({name: 'common-main', chunks: ['main', 'vendor']}),
    new webpack.optimize.CommonsChunkPlugin({name: 'common-mobile', chunks: ['main', 'vendor']}),
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
      cache: true,
      threadPool: happyThreadPool,
      loaders: ['babel-loader']
    }),
    new HappyPack({
      id: 'styles',
      cache: true,
      threadPool: happyThreadPool,
      loaders: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
    }),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/server/static/images/favicon.ico'
    }])
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
  config.plugins.push(UglifyJs,
    function () {
      this.plugin('done', function (stats) {
        require('fs').writeFileSync(path.join(config.output.path, '/chunkNames.json'), JSON.stringify(stats.toJson().assetsByChunkName, null, 4));
      })
    });

  // const isTest = true;
  // if (isTest) {
  //  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  //  config.plugins.push(new BundleAnalyzerPlugin());
  // }
}
module.exports = config;
