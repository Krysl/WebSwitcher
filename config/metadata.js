const pkg = require('../package.json');
const elementPlusPkg = require('../node_modules/element-plus/package.json');
const elternalsCSS = require('../src/style/element-plus-elternals-css');

module.exports = {
  name: 'WebSwitcher: 在百度、谷歌之间切换搜索结果',
  namespace: 'https://github.com/Krysl',
  description: '为百度、谷歌添加按钮, 点击跳转到对方页面搜索同样内容',
  license: pkg.license,
  version: pkg.version,
  author: pkg.author,
  source: pkg.repository.url,
  // 'license': 'MIT',
  include: [
    'http*://www.baidu.com/*',
    'http*://www.google.com/',
    'http*://www.google.com/webhp*',
    'http*://www.google.com/search?*',
    'http*://www.google.com.*',
    'http*://www.google.com.*/search?*'
  ],
  require: [
    `https://cdn.jsdelivr.net/npm/jquery@${pkg.dependencies.jquery}/dist/jquery.min.js`,
    `https://cdn.jsdelivr.net/npm/vue@${pkg.dependencies.vue}/dist/vue.global.prod.js`,
    // `https://cdn.jsdelivr.net/npm/@vue/shared@${pkg.dependencies.vue}/dist/shared.cjs.js`,
    `https://cdn.jsdelivr.net/npm/vue-class-component@${pkg.dependencies['vue-class-component']}/dist/vue-class-component.global.prod.js`,
    `https://cdn.jsdelivr.net/npm/vuex@${pkg.dependencies.vuex}/dist/vuex.global.prod.js`,
    `https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@${pkg.dependencies['@svgdotjs/svg.js']}/dist/svg.min.js`,
    `https://cdn.jsdelivr.net/npm/loglevel@${pkg.dependencies.loglevel}/dist/loglevel.js`,

    // for element-plus
    `https://cdn.jsdelivr.net/npm/window-vue@${pkg.dependencies['window-vue']}/index.js`,
    `https://cdn.jsdelivr.net/npm/element-plus@${pkg.dependencies['element-plus']}/dist/index.full.js`,
    `https://cdn.jsdelivr.net/npm/@popperjs/core@${elementPlusPkg.dependencies['@popperjs/core']}/dist/umd/popper.min.js`,
    // `https://cdn.jsdelivr.net/npm/async-validator@${elementPlusPkg.dependencies['async-validator']}/dist-web/index.js`,
    // `https://cdn.jsdelivr.net/npm/element-plus@${pkg.dependencies['element-plus']}/lib/theme-chalk/index.css`,
    `https://cdn.jsdelivr.net/npm/lodash@${elementPlusPkg.dependencies.lodash}/lodash.js`
  ],
  resource: [
    `element-icons.ttf  https://cdn.jsdelivr.net/npm/element-plus@${pkg.dependencies['element-plus']}/theme-chalk/fonts/element-icons.ttf`,
    `element-icons.woff  https://cdn.jsdelivr.net/npm/element-plus@${pkg.dependencies['element-plus']}/theme-chalk/fonts/element-icons.woff`,
    ...elternalsCSS.names().map((name) => `theme_chalk_${name.replace(/-/g, '_')}  https://cdn.jsdelivr.net/npm/element-plus@${pkg.dependencies['element-plus']}/theme-chalk/${name}.css`)
    // `theme-chalk-index  https://cdn.jsdelivr.net/npm/element-plus@${pkg.dependencies['element-plus']}/theme-chalk/index.css`,
  ],
  supportURL: pkg.repository.url,
  grant: [
    'GM_xmlhttpRequest',
    'GM_registerMenuCommand',
    'GM_openInTab',
    'GM_info',
    'GM_getValue',
    'GM_setValue',
    'GM_getResourceText',
    'GM_addStyle',
    'window.onurlchange',
  ],
  connect: [
    'httpbin.org'
  ],
  'run-at': 'document-start'
};
