import { LogLevelDesc } from 'loglevel';
import { InjectionKey, App, ref } from 'vue';
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from 'vuex';
import { copy, equal, hasOwnProperty } from '../../utils/object';
import pkg from '../../../package.json';
import { debug } from './../../utils/logger';
import { ShortCut } from './../../utils/shortcut';

interface SiteCfg {
  showButtonForHomePage: boolean;
  showButtonForSearchPage: boolean;
}
interface SiteCfgs {
  baidu: SiteCfg;
  google: SiteCfg;
  [prop: string]: SiteCfg;
}

export interface State {
  version: string;
  debugLevel: LogLevelDesc;
  curSite?: string;
  siteCfgs: SiteCfgs;
  shortcuts: {
    enable: boolean;
    altSearch: ShortCut[];
    showSettings: ShortCut[];
  };
  showHiddenSettings: boolean;
  showDevSettings: boolean;
  style: {
    settings: {
      background: string;
    };
  };
}

export const defaultSettings: State = {
  version: pkg.version,
  debugLevel: 'silent',
  siteCfgs: {
    baidu: {
      showButtonForHomePage: true,
      showButtonForSearchPage: true,
    },
    google: {
      showButtonForHomePage: true,
      showButtonForSearchPage: true,
    },
  },
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
  style: {
    settings: {
      background: 'rgb(255 255 255 / 80%)',
    },
  },
  showHiddenSettings: false,
  showDevSettings: false,
};

export class Config {
  store: Store<State>;
  static key: InjectionKey<Store<State>> = Symbol('WebSwitcher-Config');
  static inited = ref<boolean>(false);
  constructor() {
    const config = Config.loadValues();
    console.debug('Config=', config);
    const loadState = JSON.parse(config);
    let _state: State = defaultSettings;
    if ('version' in loadState) {
      const configVer = loadState.version;
      if (configVer === pkg.version) {
        _state = loadState;
      }
    }

    this.store = createStore<State>({
      plugins: [createLogger()],
      state: _state,
      mutations: {
        setCurrentSite(state, arg: string) {
          debug(`setCurrentSite: ${arg}`);
          state.curSite = arg;
        },
        saveConfig(state) {
          GM_setValue('Config', JSON.stringify(state));
        },
        cancelConfig(state, arg: { savedCfg: State }) {
          copy(state, arg.savedCfg);
        },
        resetConfig(state) {
          copy(state, defaultSettings);
          GM_setValue('Config', JSON.stringify(defaultSettings));
        },
        printConfig() {
          const cfg = JSON.parse(Config.loadValues());
          console.debug(cfg);
        },
        addShortCut(
          state,
          arg: {
            type: 'altSearch' | 'showSettings';
            val: ShortCut;
          }
        ) {
          let shortcut: ShortCut[];
          switch (arg.type) {
            case 'altSearch':
              shortcut = state.shortcuts.altSearch;
              break;
            case 'showSettings':
              shortcut = state.shortcuts.showSettings;
              break;
          }
          shortcut.push(arg.val);
        },
        deleteShortCut(
          state,
          arg: { type: 'altSearch' | 'showSettings'; index: number }
        ) {
          let shortcut: ShortCut[];
          switch (arg.type) {
            case 'altSearch':
              shortcut = state.shortcuts.altSearch;
              break;
            case 'showSettings':
              shortcut = state.shortcuts.showSettings;
              break;
          }
          shortcut.splice(arg.index, 1);
        },
      },
      actions: {
        saveConfig(context) {
          console.debug('Save Config...', context);
          context.commit('saveConfig');
        },
        cancelConfig(context) {
          console.debug('Cancel  Config...', context);
          context.commit('cancelConfig', {
            savedCfg: context.getters.savedCfg,
          });
        },
        resetConfig(context) {
          console.debug('Reset Config...', context);
          context.commit('resetConfig');
        },
        printConfig(context) {
          context.commit('printConfig');
        },
      },
      getters: {
        currentSiteCfg(state): SiteCfg | null {
          debug(`currentSiteCfg: curSite=${state.curSite}`);
          if (state.curSite === undefined) return null;
          if (hasOwnProperty(state.siteCfgs, state.curSite)) {
            const siteCfg = state.siteCfgs[state.curSite];
            debug('currentSiteCfg: siteCfg=', siteCfg);
            return siteCfg;
          }
          return null;
        },
        savedCfg(): State {
          return JSON.parse(Config.loadValues()) as State;
        },
        haveCfgChange(state, getters): boolean {
          return !equal(state, getters.savedCfg);
        },
      },
    });
    Config.inited.value = true;
  }

  install(app: App<Element>): void {
    debug('app.use VueX');
    app.use(this.store, Config.key);
  }

  static loadValues(): string {
    return GM_getValue('Config', JSON.stringify(defaultSettings));
  }
}

export const defaultConfig = new Config();

export function useStore(): Store<State> {
  console.assert(Config.inited.value === true);
  return baseUseStore(Config.key);
}
