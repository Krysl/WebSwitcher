const pkg = require('../package.json');

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
    'http*://www.google.com/webhp?*',
    'http*://www.google.com/search?*',
    'http*://www.google.com.*/search?*'
  ],
  require: [
    `https://cdn.jsdelivr.net/npm/jquery@${pkg.dependencies.jquery}/dist/jquery.min.js`,
    `https://cdn.jsdelivr.net/npm/vue@${pkg.dependencies.vue}/dist/vue.global.prod.js`,
    `https://cdn.jsdelivr.net/npm/vue-class-component@${pkg.dependencies['vue-class-component']}/dist/vue-class-component.global.prod.js`,
    `https://cdn.jsdelivr.net/npm/vuex@${pkg.dependencies.vuex}/dist/vuex.global.prod.js`,
    `https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@${pkg.dependencies['@svgdotjs/svg.js']}/dist/svg.min.js`,
    // `https://cdn.jsdelivr.net/npm/element-plus@${pkg.dependencies['element-plus']}/lib/index.full.js`,
    `https://cdn.jsdelivr.net/npm/loglevel@${pkg.dependencies.loglevel}/dist/loglevel.js`,
  ],
  supportURL: pkg.repository.url,
  grant: [
    'GM_xmlhttpRequest',
    'GM_registerMenuCommand',
    'GM_info',
    'GM_getValue',
    'window.onurlchange',
  ],
  connect: [
    'httpbin.org'
  ],
  'run-at': 'document-start'
};
