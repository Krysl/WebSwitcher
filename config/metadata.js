const pkg = require('../package.json')

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
    'http*://*baidu.com/s*',
    '*://www.google.com/search?*',
    '*://www.google.com.*/search?*'
  ],
  require: [
    `https://cdn.jsdelivr.net/npm/jquery@${pkg.dependencies.jquery}/dist/jquery.min.js`,
    `https://cdn.jsdelivr.net/npm/axios@${pkg.dependencies.axios}/dist/axios.min.js`,
    `https://cdn.jsdelivr.net/npm/axios-userscript-adapter@${pkg.dependencies['axios-userscript-adapter']}/dist/axiosGmxhrAdapter.min.js`,
    `https://cdn.jsdelivr.net/npm/vue@${pkg.dependencies.vue}/dist/vue.global.prod.js`,
    `https://cdn.jsdelivr.net/npm/vue-class-component@${pkg.dependencies['vue-class-component']}/dist/vue-class-component.global.prod.js`,
    `https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@${pkg.dependencies['@svgdotjs/svg.js']}/dist/svg.min.js`,
    // `https://cdn.jsdelivr.net/npm/base64-js@${pkg.dependencies['base64-js']}/index.js`,
  ],
  supportURL: pkg.repository.url,
  grant: [
    'GM_xmlhttpRequest'
  ],
  connect: [
    'httpbin.org'
  ],
  'run-at': 'document-end'
}
