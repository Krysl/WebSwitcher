const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const ESLintPlugin = require('eslint-webpack-plugin');
const pkg = require('../package.json');
const ansicolor = require('ansicolor');
import * as elternalsCSS from '../src/style/element-plus-elternals-css';

const webpackConfig = {
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.global.js',
      'vue-class-component$':
        'vue-class-component/dist/vue-class-component.global.js',
    },
    extensions: ['.js', '.ts', '.tsx'],
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
      ansicolor: 'Colors',
      axios: 'axios',
      'axios-userscript-adapter': 'axiosGmxhrAdapter',
      vue: 'Vue',
      '@vue/shared': 'window',
      'vue-class-component': 'VueClassComponent',
      vuex: 'Vuex',
      '@svgdotjs/svg.js': 'SVG',
      loglevel: 'log',
      '@popperjs/core': 'Popper',
      // 'async-validator': 'Schema',
    },
    function ({ context, request }, callback) {
      const regex = /^lodash(\/(.*))?/;
      if (regex.test(request)) {
        console.log(context, request, callback);
        const name = regex.exec(request)?.[2];
        console.log(name);
        return callback(null, '_.' + name);
      }
      const regex2 = /^element-plus\/lib\/components\/([-\w]+)\/style\/css/;
      if (regex2.test(request)) {
        const name = regex2.exec(request)?.[1];
        if (elternalsCSS.includes('el-' + name)) {
          console.log(ansicolor.blue('Find css'), request, ansicolor.cyan(name));
          return callback(
            null,
            'window.theme_chalk_el_' + name.replace(/-/g, '_')
          );
        } else {
          console.log(ansicolor.red('Not Find'), request, name, context);
        }
      }

      const elementplus_regex = /^element-plus(\/(lib\/)(.*))/;
      if (elementplus_regex.test(request)) {
        const name = elementplus_regex.exec(request)?.[3];
        const pname = name
          .split('-')
          .map((e) => e[0].toUpperCase() + e.slice(1))
          .join('');
        console.log(ansicolor.blue('Find lib'), request, ansicolor.green(name), pname);
        return callback(null, 'ElementPlus.' + pname);
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
              appendTsxSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
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
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/inline',
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
    ],
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
      formatter: 'visualstudio',
    }),
    new VueLoaderPlugin(),
  ],
};

module.exports = webpackConfig;
