import App from "./App.vue";

// @ts-ignore
if (typeof Vue !== 'undefined') {
  // @ts-ignore
  window.Vue = Vue;
}

import { createApp } from "vue";
import VueCompositionAPI from '@vue/composition-api'
import * as $ from "jquery"

console.log('script start');

var _vue = null
if ((typeof window !== 'undefined') && (window as any).Vue) { // var Val init at 19
  _vue = (window as any).Vue;
  // VueCompositionAPI.install(_vue); // pre intall at 15962
  console.log(typeof (window as any).Vue);
}
console.log(_vue); //16225

try {
  var baiduSearch = $('.s_btn_wr,#s_btn_wr');
  const container = document.createElement('a');
  container.id = 'app';
  baiduSearch.after(container);
} catch (e) {
  console.log(e);
}

const app = createApp(App);
// app.use(VueCompositionAPI);
app.mount("#app");
