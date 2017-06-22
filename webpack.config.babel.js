const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HappyPack = require('happypack');
const parts = require('./webpack.parts');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const commonConfig = merge([
  parts.loadJavaScript({include: PATHS.app}),
  parts.lintJavascript({include: PATHS.app}),
  {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
      publicPath: '/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'app/obachine-index.html',
      }),
      new ManifestPlugin({
        fileName: 'manifest.json',
      }),
      new FaviconsWebpackPlugin({
        logo: './app/favicon.png',
        prefix: 'icons.[hash]/',
        emitStats: false,
        inject: true,
        background: '#fff',
        title: 'Obachine',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      }),
      new HappyPack({
        loaders: [
          'babel-loader',
        ],
      }),
    ],
  },
  parts.loadFonts({
    options: {
      name: './fonts/[name].[ext]',
    },
  }),
  parts.lintCSS({include: PATHS.app}),
]);

const productionConfig = merge([
  {
    recordsPath: path.join(__dirname, 'records.json'),
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
    ],
    output: {
      chunkFilename: '[name].[chunkhash:8].js',
      filename: '[name].[chunkhash:8].js',
    },
  },
  {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 100000,
      maxAssetSize: 450000,
    },
  },
  parts.clean(PATHS.build),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
      },
      safe: true,
    },
  }),
  parts.attachRevision(),
  {
    entry: {
      vendor: ['choo'],
    },
  },
  parts.extractBundles([
    {
      name: 'vendor',
    },
    {
      name: 'manifest',
      minChunks: Infinity,
    },
  ]),
  parts.generateSourceMaps({type: 'source-map'}),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[hash:8].[ext]',
      outputPath: 'images/',
    },
  }),
  parts.extractCSS({
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      parts.autoprefix(),
    ],
  }),
]);

const developmentConfig = merge([
  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
  },
  parts.generateSourceMaps({type: 'cheap-module-eval-source-map'}),
  parts.loadImages(),
  parts.loadCSS(),
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

module.exports = env => {
  if (env.target === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
