import { createApp } from "vue";
import * as $ from "jquery"
import App from "./App.vue";

console.log('script start');

try {
  var baiduSearch = $('.s_btn_wr,#s_btn_wr');
  const container = document.createElement('a');
  container.id = 'app';
  baiduSearch.after(container);
} catch (e) {
  console.log(e);
}

createApp(App).mount("#app");
