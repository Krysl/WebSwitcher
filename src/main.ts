import App from "./App.vue";

// @ts-ignore
if (typeof Vue !== 'undefined') {
  // @ts-ignore
  window.Vue = Vue;
}

import { createApp } from "vue";
import VueCompositionAPI from '@vue/composition-api'
import * as $ from "jquery"
import Baidu from "./site/Baidu";
import Google from "./site/Google";

console.log('script start');

var _vue = null
if ((typeof window !== 'undefined') && (window as any).Vue) { // var Val init at 19
  _vue = (window as any).Vue;
  // VueCompositionAPI.install(_vue); // pre intall at 15962
  console.log(typeof (window as any).Vue);
}
console.log(_vue); //16225


const hostname = window.location.hostname;

if (hostname.match(RegExp(/baidu.com/))) {
  try {
    const baiduSearch = $('.s_btn_wr,#s_btn_wr');
    const height = baiduSearch.css("height");;
    const container = document.createElement('div');
    container.id = 'app';
    container.style.display = "inline-block";
    container.style.height = height;
    baiduSearch.after(container);
  } catch (e) {
    console.log(e);
  }

  const app = createApp(Baidu);
  app.mount("#app");
} else if (hostname.match(RegExp(/google.com/))) {
  try {
    const googleSearch = $('.Tg7LZd:first');
    googleSearch.css("padding-right", 0);

    const container = document.createElement('div');
    container.id = 'app';
    container.style.margin = "0.4%";

    const dividLineContainer = document.createElement('div');
    const dividLineTopOfffset = document.createElement('span');
    const dividLine = document.createElement('span');
    dividLineTopOfffset.style.height = "17.5%";
    dividLine.style.height = "65%";
    dividLine.style.borderLeft = "1px solid #dfe1e5";
    dividLineContainer.style.display = "flex";
    dividLineContainer.style.flexDirection = "column";
    dividLineContainer.appendChild(dividLineTopOfffset);
    dividLineContainer.appendChild(dividLine);

    googleSearch.after(container);
    googleSearch.after(dividLineContainer);
  } catch (e) {
    console.log(e);
  }

  const app = createApp(Google);
  app.mount("#app");

}
