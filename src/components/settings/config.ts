import { LogLevelDesc } from 'loglevel';
import { InjectionKey, App, ref } from 'vue';
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from 'vuex';
import { debug } from './../../utils/logger';
import { ShortCut } from './../../utils/shortcut';

export interface State {
  count: number;
  debugLevel: LogLevelDesc;
  shortcuts: {
    enable: boolean;
    altSearch: ShortCut[];
    showSettings: ShortCut[];
  };
  showHiddenSettings: boolean;
}

export class Config {
  config: string;
  store: Store<State>;
  static key: InjectionKey<Store<State>> = Symbol('WebSwitcher-Config');
  static inited = ref<boolean>(false);
  constructor() {
    this.store = createStore<State>({
      plugins: [createLogger()],
      state: {
        count: 0,
        debugLevel: 'debug',
        shortcuts: {
          enable: true,
          altSearch: [
            {
              alt: true,
              code: 'KeyS',
            },
            {
              ctrl: true,
              shift: true,
              code: 'Enter',
            },
          ],
          showSettings: [
            {
              ctrl: true,
              alt: true,
              code: 'KeyS',
            },
          ],
        },
        showHiddenSettings: false,
      },
    });
    Config.inited.value = true;
    this.config = GM_getValue('Config', 'defautCfg');
    debug('Config=', this.config);
  }

  install(app: App<Element>): void {
    debug('app.use VueX');
    app.use(this.store, Config.key);
  }
}

export const defaultConfig = new Config();

export function useStore(): Store<State> {
  console.assert(Config.inited.value === true);
  return baseUseStore(Config.key);
}
