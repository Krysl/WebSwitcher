# WebSwitcher: 在百度、谷歌之间切换搜索结果

## ⭐功能：
1. 在百度、谷歌搜索时，可点击搜索栏边上的相应按钮切换到对应网站搜索同一结果；
2. 可使用**快捷键** `Alt + S` 或 `Ctrl + Shift + Enter` 触发切换搜索；


![WebSwitcher v0.3.0](https://images.gitee.com/uploads/images/2021/0209/234224_20a95ef2_2282292.gif)

## ⚡更新：
### 2021.02.26
1. 添加配置界面;

![WebSwitcher.v0.5.0](https://images.gitee.com/uploads/images/2021/0226/053252_c5cd6a18_2282292.gif)

### 2021.02.09
1. 优化启动速度;

### 2021.02.08
1. 上一版本Google页面的百度图标太小不易点击，所以扩大大小;
2. 修复Google页面滚动后百度图标错位；

### 2021.02.07
1. 快捷键 `Alt + S`  /  `Ctrl + Shift + Enter` 触发切换搜索

## 🐛问题反馈 及 ✨功能请求
欢迎到[Github](https://github.com/Krysl/WebSwitcher/issues)或[OpenUserJS](https://openuserjs.org/scripts/krysl/WebSwitcher_%E5%9C%A8%E7%99%BE%E5%BA%A6%E3%80%81%E8%B0%B7%E6%AD%8C%E4%B9%8B%E9%97%B4%E5%88%87%E6%8D%A2%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C/issues)或[Greasy Fork](https://greasyfork.org/zh-CN/scripts/421329-webswitcher-%E5%9C%A8%E7%99%BE%E5%BA%A6-%E8%B0%B7%E6%AD%8C%E4%B9%8B%E9%97%B4%E5%88%87%E6%8D%A2%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C/feedback)上提出反馈意见。


---

## 本脚本使用[Vue v3](https://v3.cn.vuejs.org/)、[TypeScript](https://www.typescriptlang.org/zh/)、TSX编写，使用[Webpack v5](https://webpack.js.org/)来打包.

编译开发可参考以下文档：
(基于[Trim21](https://github.com/Trim21)的
[webpack-userscript-template](https://github.com/Trim21/webpack-userscript-template/)
工程模版开发
)

---

# This is a project help you build userscript with webpack

Just [use this git repo as a template](https://github.com/Trim21/webpack-userscript-template/generate).

[中文说明](./readme.cn.md)

## dev

1. Allow Tampermonkey's access to local file URIs [tampermonkey/faq](https://tampermonkey.net/faq.php?ext=dhdg#Q204)
2. install deps with `npm i` or `npm ci`.
3. `npm run dev` to start your development.
4. open `webpack-userscript-template/dist/index.dev.user.js` in your Chrome and install it with your userscript manager.

this userscript's meta contains `// @require file://path/to/dist/index.prod.user.js`,
it will run the code in `index.prod.user.js`,
which take [src/js/index.js](./src/js/index.js) as entry point.

every times you edit your metadata, you'll have to install it again,
because Tampermonkey don't read it from dist every times.

5. edit [src/js/index.js](./src/js/index.js) with es6, you can even import css or less files. You can use scss if you like.
6. go wo <https://www.example.com/> and open console, you'll see it's working.

livereload is default enabled, use [this chrome extension](https://chrome.google.com/webstore/detail/jnihajbhpnppcggbcgedagnkighmdlei)

## TypeScript

use typescript as normal, see [example](src/js/example.ts)

## dependencies

There are two ways to using a package on npm.

### UserScript way

like original UserScript way, you will need to add them to your [user script metadata's require section](./config/metadata.js#L13-L17) , and exclude them in [config/webpack.config.base.js](./config/webpack.config.base.js#L21-L25)

### Webpack way

just install a package and import it in your js file. webpack will pack them with in your final production js file.

## build

```bash
npm run build
```

`dist/index.prod.user.js` is the finally script. you can manually copy it to greaskfork for deploy.

## auto deploy

[github actions](./.github/workflows/deploy.yaml#L36) will deploy production userscript to gh-pages branch.

[example](https://github.com/Trim21/webpack-userscript-template/tree/gh-pages)

[deployed](https://trim21.github.io/webpack-userscript-template/)

You can auto use greskfork's auto update function.
