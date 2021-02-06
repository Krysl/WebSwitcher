const { merge } = require("webpack-merge");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserPlugin = require("terser-webpack-plugin");

const UserScriptMetaDataPlugin = require('userscript-metadata-webpack-plugin')
const metadata = require('./metadata')

const webpackConfig = require('./webpack.config.base')
const cfg = merge({}, webpackConfig, {
  mode: 'development',
  output: {
    filename: 'index.prod.user.js'
  },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: {
              test: function (comment) {
                if (comment) {
                  return /\@/i.test(comment) || /UserScript/i.test(comment) || /eslint-disable/i.test(comment);
                }
              }
            }
          },
        },
      }),
    ],
  },
  plugins: [
    new UserScriptMetaDataPlugin({
      metadata
    }),
  ]
})

if (process.env.npm_config_report) {
  cfg.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = cfg
