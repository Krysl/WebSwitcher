const path = require("path");
const { merge } = require("webpack-merge");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const LiveReloadPlugin = require("webpack-livereload-plugin");
const UserScriptMetaDataPlugin = require("userscript-metadata-webpack-plugin");
const metadata = require("./metadata");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

const webpackConfig = require("./webpack.config.base");

metadata.require.push(
  "file://" + path.resolve(__dirname, "../dist/index.prod.user.js")
);

const cfg = merge(webpackConfig, {
  entry: {
    prod: webpackConfig.entry,
    dev: path.resolve(__dirname, "./empty.js"),
  },
  output: {
    filename: "index.[name].user.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: '../dist/',
  },
  devtool: "source-map",
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 200,
    poll: 200,
  },
  devServer: {
    watchContentBase: true,
    publicPath: '../dist/',
    contentBase: path.resolve(__dirname, '../dist/'),
  },
  plugins: [
    new UserScriptMetaDataPlugin({
      metadata,
    }),
  ],
});

if (process.env.npm_config_report) {
  cfg.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = smp.wrap(cfg);
