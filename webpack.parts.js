const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

exports.devServer = ({host, port} = {}) => ({
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host, // Defaults to `localhost`
    port, // Defaults to 8080,
    proxy: {
      '/api': 'http://localhost:3000'
    },
    overlay: {
      errors: true,
      warnings: true
    }
  }
});

exports.lintJavascript = ({include, exclude, options}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        enforce: 'pre',

        loader: 'xo-loader',
        options
      }
    ]
  }
});

exports.lintCSS = ({include, exclude}) => {
  const plugin = new StyleLintPlugin({
    files: ['app/**/*.css']
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude
        }
      ]
    },
    plugins: [plugin]
  };
};

exports.loadCSS = ({include, exclude} = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,

        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
});

exports.extractCSS = ({include, exclude, use}) => {
  // Output extracted to CSS to a file
  const plugin = new ExtractTextPlugin({
    filename: '[name].css'
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,

          use: plugin.extract({
            use,
            fallback: 'style-loader'
          })
        }
      ]
    },
    plugins: [plugin]
  };
};

exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: () => ([
      require('autoprefixer')()
    ])
  }
});

exports.loadImages = ({include, exclude, options} = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        include,
        exclude,

        use: [
          {
            loader: 'url-loader',
            options
          },
          'image-webpack-loader'
        ]
      }
    ]
  }
});
