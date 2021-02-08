import { App } from 'vue';

export abstract class Site {
  abstract name: string;
  abstract siteAddrReg: RegExp;
  abstract mountElementName: string;
  abstract app: App<Element> | null;
  abstract beforeMount(): void;
  abstract mount(): Promise<void>;
  run(): void {
    const hostname = window.location.hostname;
    if (!hostname.match(this.siteAddrReg)) {
      return;
    }
    console.log(`WebSwitcher for ${this.name}`);
    this.beforeMount();
    // set up the mutation observer
    const observer = new MutationObserver((mutations, me) => {
      // `mutations` is an array of mutations that occurred
      // `me` is the MutationObserver instance
      const canvas = $(this.mountElementName);
      if (canvas.length > 0) {
        console.log(
          `WebSwitcher for ${this.name}: found ${this.mountElementName}`
        );
        this.mount();
        me.disconnect(); // stop observing
      }
    });

    console.log(`WebSwitcher for ${this.name}: document=${document}`);
    // start observing
    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  }
}
