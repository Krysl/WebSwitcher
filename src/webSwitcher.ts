import { Site } from './site/site';
import { Settings } from './components/settings/settings';

export interface WebSwitcherOptions {
  mutationObserver?: MutationObserver;
}
export class WebSwitcher {
  sites: Site[];
  settings = new Settings();
  constructor(sites: Site[]) {
    this.sites = sites;
  }

  run(options?: WebSwitcherOptions): void {
    this.settings.run(this.settings, options);
    // this.settings.app?.config;
    this.sites.forEach((site: Site) => {
      site.run(this.settings, options);
    });
  }
}
