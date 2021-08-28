import { App } from 'vue';
import { debug } from '../utils/logger';
import { WebSwitcherOptions } from './../webSwitcher';
import { Settings } from './../components/settings/settings';

export abstract class Site {
  abstract name: string;
  abstract siteAddrReg: RegExp;
  ObserverInterval = 0;

  // return true means need wait
  abstract waitCondition: (() => boolean) | null;

  // search button
  abstract mountElementName: string;

  abstract app: App<Element> | null;
  abstract beforeMount(): void;
  abstract mount(): Promise<void>;
  run(settings: Settings, options?: WebSwitcherOptions): void {
    const url = window.location.href;
    debug('url=', url);
    const match = url.match(this.siteAddrReg);
    if (!match) {
      return;
    }
    debug(`WebSwitcher for ${this.name}`);
    console.assert(settings?.cfg !== undefined);
    this.beforeMount();
    console.assert(this.app !== null);
    if (settings !== undefined) {
      const cfg = settings.cfg;
      if (cfg && this.app) {
        cfg.install(this.app);
        console.log(`=========== ${this.name} install Vuex ============`);
      }
    }
    console.log(
      `typeof MutationObserver = ${typeof options?.mutationObserver}`
    );
    this.runObserver(this, options);
  }

  runObserver(thisArg: Site, options?: WebSwitcherOptions): void {
    const _MutationObserver = options?.mutationObserver;
    if (
      typeof _MutationObserver !== 'undefined' &&
      _MutationObserver !== null
    ) {
      try {
        // set up the mutation observer
        // @ts-ignore
        const observer = new _MutationObserver((mutations, me) => {
          // `mutations` is an array of mutations that occurred
          // `me` is the MutationObserver instance
          if (
            thisArg.waitCondition !== null &&
            typeof thisArg.waitCondition === 'function' &&
            thisArg.waitCondition() === true
          ) {
            return;
          }
          const canvas = $(thisArg.mountElementName);
          console.log(`${thisArg.mountElementName}: ${canvas.length}`);
          if (canvas.length > 0) {
            debug(
              `WebSwitcher for ${thisArg.name}: found ${thisArg.mountElementName}`
            );
            thisArg.mount();
            me.disconnect(); // stop observing
          }
        });

        // debug(`WebSwitcher for ${this.name}: document=${document}`);
        // start observing
        observer.observe(document, {
          childList: true,
          subtree: true,
        });
      } catch (error) {
        console.log(typeof this.waitCondition);
        throw error;
      }
      window.clearInterval(this.ObserverInterval);
    } else {
      // throw new Error('MutationObserver NOT ready');
    }
  }
}
