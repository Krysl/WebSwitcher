const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const ESLintPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const pkg = require('../package.json')
const ansicolor = require('ansicolor');
const elternalsCSS = require('./element-plus-elternals-css.js');

const webpackConfig = {
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.global.js',
      'vue-class-component$': 'vue-class-component/dist/vue-class-component.global.js'
    },
    extensions: ['.js', '.ts', '.tsx']
  },
  // performance: {
  // hints: false
  // },
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '../dist/',
    assetModuleFilename: 'images/[hash].[ext][query]',
  },
  experiments: {
    topLevelAwait: true,
  },
  externals: [
    {
      jquery: '$',
      axios: 'axios',
      'axios-userscript-adapter': 'axiosGmxhrAdapter',
      vue: 'Vue',
      'vue-class-component': 'VueClassComponent',
      'vuex': 'Vuex',
      '@svgdotjs/svg.js': 'SVG',
      // 'element-plus': 'ElementPlus',
      'loglevel': 'log',
      '@popperjs/core': 'Popper',
      // 'async-validator': 'Schema',
    },
    function ({ context, request }, callback) {
      const regex = /^lodash(\/(.*))?/
      if (regex.test(request)) {
        console.log(context, request, callback);
        const name = regex.exec(request)?.[2];
        console.log(name)
        return callback(null, '_.' + name);
      }
      const regex2 = /^element-plus\/lib\/theme-chalk(\/(.*)\.css)?/;
      if (regex2.test(request)) {
        const name = regex2.exec(request)?.[2];
        if (elternalsCSS.includes(name)) {
          console.log(ansicolor.blue('Find'), name, context, request);
          return callback(null, 'window.theme_chalk_' + name.replace(/-/g, '_'));
        } else {
          console.log(ansicolor.lightGray('Not Find'), name, context, request);
        }
      }

      callback();
    },
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              appendTsxSuffixTo: [/\.vue$/]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader', // 将 Less 编译为 CSS
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/inline"
        // loader: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 8000,
        //       name: 'imgs/[contenthash].[ext]'
        //     }
        //   },
        // ],
      },
    ]
  },
  // optimization: {
  //   moduleIds: 'deterministic',
  // },
  plugins: [
    new ESLintPlugin({
      fix: true,
      useEslintrc: true,
      overrideConfigFile: path.resolve(__dirname, '../.eslintrc.yaml'),
      extensions: ['.js', '.ts', '.tsx'],
      formatter: "visualstudio",
    }),
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin(),
  ]
}

module.exports = webpackConfig
