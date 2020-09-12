const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge({}, common, {
  mode: 'development',
  devtool: 'inline-source-map',
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
});
