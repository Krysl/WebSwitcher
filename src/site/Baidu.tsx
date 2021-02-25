import {
  App,
  createApp,
  defineComponent,
  computed,
  watch,
  onMounted,
} from 'vue';
import GoogleButton from '../components/button/GoogleButton';
import { useStore } from '../components/settings/config';
import { debug } from '../utils/logger';
import { Site } from './site';

export const BaiduApp = defineComponent({
  name: 'Baidu',
  setup() {
    const store = useStore();
    store.commit('setCurrentSite', 'baidu');
    const url = window.location.href;
    const isSearchPage = !!url.match(/www\.baidu\.com\/s\?/);
    const display = computed(() => {
      if (isSearchPage) {
        return store.state.siteCfgs?.baidu.showButtonForSearchPage;
      } else {
        return store.state.siteCfgs?.baidu.showButtonForHomePage;
      }
    });
    const setAppDisplay = (val: boolean) => {
      const app = $('#WebSwitcher_app');
      if (val === true) {
        debug('display: inline-block;');
        app.css('display', 'inline-block');
      } else {
        debug('display: none;');
        app.css('display', 'none');
      }
    };
    onMounted(() => setAppDisplay(display.value));
    watch(display, setAppDisplay);
    return () => <GoogleButton vShow={display.value} input="#kw" />;
  },
});

export class Baidu extends Site {
  name = 'Baidu';
  siteAddrReg = /www\.baidu\.com/;
  mountElementName = '.s_btn_wr,#s_btn_wr';
  container: HTMLElement | null = null;
  app: App<Element> | null = null;
  waitCondition = (): boolean => {
    const result = $('.result.c-container.new-pmd');
    return false;
    return !(result.length > 0);
  };

  beforeMount(): void {
    this.container = document.createElement('div');
    this.container.id = 'WebSwitcher_app';
    this.container.style.display = 'inline-block';
    this.app = createApp(BaiduApp);
  }

  async mount(): Promise<void> {
    const searchButton = $(this.mountElementName);
    const height = searchButton.css('height');
    const form = $('#form.fm');
    if (this.container) {
      const width = form.width();
      if (form.length > 0 && width) {
        form.width(width + 102);
      }
      this.container.style.height = height;
      searchButton.after(this.container);
      this.app?.mount(this.container);

      $('#kw').one('input', () => {
        debug('#kw on change event');
        const observer = new MutationObserver((mutations, me) => {
          const newHeight = searchButton.css('height');
          if (newHeight !== height) {
            debug(`#kw on change event: set new height: ${newHeight}`);
            if (this.container !== null) {
              this.container.style.height = newHeight;
            }
            form.css('width');
            me.disconnect(); // stop observing
          }
        });
        observer.observe(document, {
          childList: true,
          subtree: true,
        });
      });
    }
  }
}

export default BaiduApp;
