import { App, createApp, defineComponent } from 'vue';
import BaiduButton from '../components/button/BaiduButton';
import { Site } from './site';

export const GoogleApp = defineComponent({
  name: 'Google',
  setup() {
    return () => <BaiduButton input=".gLFyf.gsfi:first" />;
  },
});

export class Google extends Site {
  name = 'Google';
  siteAddrReg = /www\.google\.com(\..*)?\/search\?.*/;
  mountElementName = '.Tg7LZd:first';
  container: HTMLElement | null = null;
  dividLineContainer: HTMLElement | null = null;
  app: App<Element> | null = null;
  waitCondition = null;
  beforeMount(): void {
    this.container = document.createElement('div');
    this.container.id = 'app';
    this.container.style.margin = '0.4%';

    this.dividLineContainer = document.createElement('div');
    const dividLineTopOfffset = document.createElement('span');
    const dividLine = document.createElement('span');
    dividLineTopOfffset.style.height = '17.5%';
    dividLine.style.height = '65%';
    dividLine.style.borderLeft = '1px solid #dfe1e5';
    this.dividLineContainer.style.display = 'flex';
    this.dividLineContainer.style.flexDirection = 'column';
    this.dividLineContainer.appendChild(dividLineTopOfffset);
    this.dividLineContainer.appendChild(dividLine);

    this.app = createApp(GoogleApp);
  }

  async mount(): Promise<void> {
    console.debug('Google: mount...');
    const searchButton = $(this.mountElementName);
    searchButton.css('padding-right', '3px');

    if (this.container !== null) {
      searchButton.after(this.container);
      this.app?.mount(this.container);
    }
    if (this.dividLineContainer !== null) {
      searchButton.after(this.dividLineContainer);
    }
  }
}

export default GoogleApp;
