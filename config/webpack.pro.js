const { merge } = require('webpack-merge');
const cssnano = require('cssnano');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: false,
      protectWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ['**/*'],
      cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js'],
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.csss$/g,
      cssProcessor: cssnano,
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
    new UglifyWebpackPlugin({
      include: path.resolve(__dirname, '../src'),
    }),
  ],
});
