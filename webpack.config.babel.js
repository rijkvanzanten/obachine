const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const commonConfig = merge([
  {
    entry: {
      app: PATHS.app
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Obachine'
      })
    ]
  },
  parts.lintJavascript({include: PATHS.app}),
  parts.lintCSS({include: PATHS.app}),
  parts.loadJavaScript({include: PATHS.app})
]);

const productionConfig = merge([
  {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 100000,
      maxAssetSize: 450000
    }
  },
  parts.clean(PATHS.build),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true
      },
      safe: true
    }
  }),
  parts.attachRevision(),
  {
    entry: {
      vendor: ['choo']
    }
  },
  parts.extractBundles([
    {
      name: 'vendor'
    }
  ]),
  parts.generateSourceMaps({type: 'source-map'}),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[hash:12].[ext]',
      outputPath: 'images/'
    }
  }),
  parts.extractCSS({
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      },
      parts.autoprefix()
    ]
  })
]);

const developmentConfig = merge([
  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
    }
  },
  parts.generateSourceMaps({type: 'cheap-module-eval-source-map'}),
  parts.loadImages(),
  parts.loadCSS(),
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT
  })
]);

module.exports = env => {
  if (env.target === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};