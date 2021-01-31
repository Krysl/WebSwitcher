const pkg = require('../package.json')

module.exports = {
  name: 'WebSwitcher: 在百度、谷歌之间切换搜索结果',
  namespace: 'https://github.com/Krysl',
  description: '为百度、谷歌添加按钮使其在对方页面搜索结果',
  version: pkg.version,
  author: pkg.author,
  source: pkg.repository.url,
  // 'license': 'MIT',
  include: [
    'http*://*baidu.com/s*'
  ],
  require: [
    `https://cdn.jsdelivr.net/npm/jquery@${pkg.dependencies.jquery}/dist/jquery.min.js`,
    `https://cdn.jsdelivr.net/npm/axios@${pkg.dependencies.axios}/dist/axios.min.js`,
    `https://cdn.jsdelivr.net/npm/axios-userscript-adapter@${pkg.dependencies['axios-userscript-adapter']}/dist/axiosGmxhrAdapter.min.js`,
    `https://www.unpkg.com/vue@${pkg.dependencies.vue}/dist/vue.global.js`,
    `https://www.unpkg.com/jquery@${pkg.dependencies.jquery}/dist/jquery.js`
  ],
  grant: [
    'GM_xmlhttpRequest'
  ],
  connect: [
    'httpbin.org'
  ],
  'run-at': 'document-end'
}
