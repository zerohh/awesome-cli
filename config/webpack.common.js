const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/entry/index.tsx')],
  // entry: path.resolve(__dirname, '../src/entry/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].js',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 9000,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api/*': {
        target: '',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  module: {
    unknownContextCritical: false,
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: ['eslint-loader', 'source-map-loader', 'babel-loader'],
      },
      {
        test: /\.ts(x)?$/,
        include: path.resolve(__dirname, '../src'),
        use: ['babel-loader'],
      },
      {
        test: /\.scss/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        }, 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|bmp|eot|wof|woff2|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'imgs/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
    }),
  ],
};
