import { App } from 'vue';

export abstract class Site {
  abstract name: string;
  abstract siteAddrReg: RegExp;

  // return true means need wait
  abstract waitCondition: (() => boolean) | null;
  abstract mountElementName: string;
  abstract app: App<Element> | null;
  abstract beforeMount(): void;
  abstract mount(): Promise<void>;
  run(): void {
    const url = window.location.href;
    console.log('url=', url);
    const match = url.match(this.siteAddrReg);
    if (!match) {
      return;
    }
    console.debug(`WebSwitcher for ${this.name}`);
    this.beforeMount();
    // set up the mutation observer
    const observer = new MutationObserver((mutations, me) => {
      // `mutations` is an array of mutations that occurred
      // `me` is the MutationObserver instance
      if (this.waitCondition !== null && this.waitCondition() === true) return;
      const canvas = $(this.mountElementName);
      if (canvas.length > 0) {
        console.debug(
          `WebSwitcher for ${this.name}: found ${this.mountElementName}`
        );
        this.mount();
        me.disconnect(); // stop observing
      }
    });

    // console.debug(`WebSwitcher for ${this.name}: document=${document}`);
    // start observing
    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  }
}
