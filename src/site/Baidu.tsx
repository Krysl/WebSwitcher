import { App, createApp, defineComponent } from 'vue';
import GoogleButton from '../components/button/GoogleButton';
import { Site } from './site';

export const BaiduApp = defineComponent({
  name: 'Baidu',
  setup() {
    return () => <GoogleButton input="#kw" />;
  },
});

export class Baidu extends Site {
  name = 'Baidu';
  siteAddrReg = /baidu.com/;
  mountElementName = '.s_btn_wr,#s_btn_wr';
  container: HTMLElement | null = null;
  app: App<Element> | null = null;
  beforeMount(): void {
    this.container = document.createElement('div');
    this.container.id = 'app';
    this.container.style.display = 'inline-block';
    this.app = createApp(BaiduApp);
  }

  async mount(): Promise<void> {
    const searchButton = $(this.mountElementName);
    const height = searchButton.css('height');
    if (this.container) {
      this.container.style.height = height;
      searchButton.after(this.container);
      this.app?.mount(this.container);
    }
  }
}

export default BaiduApp;
