import {
  App,
  computed,
  createApp,
  defineComponent,
  onMounted,
  watch,
} from 'vue';
import ElementPlus from 'element-plus';
import BaiduButton from '../components/button/BaiduButton';
import { useStore } from '../components/settings/config';
import { debug } from '../utils/logger';
import { Site } from './site';

const siteAddrReg = /www\.google\.com(\.[^/]*)?\/search\?.*/;
const _mountElementName = '.Tg7LZd:first';
const _mountElementNameHomePage = '.XDyW0e:first';
export const GoogleApp = defineComponent({
  name: 'Google',
  setup() {
    const store = useStore();
    store.commit('setCurrentSite', 'google');
    const url = window.location.href;
    const isSearchPage = !!url.match(siteAddrReg);
    const display = computed(() => {
      if (isSearchPage) {
        return store.state.siteCfgs?.google.showButtonForSearchPage;
      } else {
        return store.state.siteCfgs?.google.showButtonForHomePage;
      }
    });

    const dividLineContainer = document.createElement('div');
    const dividLineTopOfffset = document.createElement('span');
    const dividLine = document.createElement('span');
    dividLineTopOfffset.style.height = '17.5%';
    dividLine.style.height = '65%';
    dividLine.style.borderLeft = '1px solid #dfe1e5';
    dividLineContainer.style.display = display.value === true ? 'flex' : 'none';
    dividLineContainer.style.flexDirection = 'column';
    dividLineContainer.appendChild(dividLineTopOfffset);
    dividLineContainer.appendChild(dividLine);
    watch(display, (_display) => {
      dividLineContainer.style.display = _display === true ? 'flex' : 'none';
    });

    onMounted(() => {
      const searchButton = $(
        isSearchPage ? _mountElementName : _mountElementNameHomePage
      );
      searchButton.css('padding-right', '3px');
      searchButton.after(dividLineContainer);
    });
    return () => (
      //   {display.value && dividLineContainer}
      <BaiduButton vShow={display.value} input="input.gLFyf.gsfi" />
    );
  },
});

export class Google extends Site {
  name = 'Google';
  siteAddrReg = siteAddrReg;
  mountElementName = _mountElementName;
  container: HTMLElement | null = null;
  app: App<Element> | null = null;
  waitCondition = null;
  beforeMount(): void {
    this.container = document.createElement('div');
    this.container.id = 'WebSwitcher_app';
    this.container.style.margin = '0.4%';

    this.app = createApp(GoogleApp);
    this.app.use(ElementPlus);
  }

  async mount(): Promise<void> {
    debug('Google: mount...');

    const searchButton = $(this.mountElementName);

    if (this.container !== null) {
      searchButton.after(this.container);
      this.app?.mount(this.container);
    }
    // if (this.dividLineContainer !== null) {
    //   searchButton.after(this.dividLineContainer);
    // }
  }
}

export default GoogleApp;
