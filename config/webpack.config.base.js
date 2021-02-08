const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const ESLintPlugin = require('eslint-webpack-plugin');
const pkg = require('../package.json')

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
  externals: {
    jquery: '$',
    axios: 'axios',
    'axios-userscript-adapter': 'axiosGmxhrAdapter',
    vue: 'Vue',
    'vue-class-component': 'VueClassComponent',
    '@svgdotjs/svg.js': 'SVG',
    // 'base64-js':'base64-js'
  },
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
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader', // 将 Less 编译为 CSS
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
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
      useEslintrc: true,
      overrideConfigFile: path.resolve(__dirname, '../.eslintrc.yaml'),
      extensions: ['.js', '.ts', '.tsx'],
      formatter: "visualstudio",
    }),
    new VueLoaderPlugin(),
  ]
}

module.exports = webpackConfig
