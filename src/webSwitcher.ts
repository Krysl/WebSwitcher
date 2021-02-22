import { Site } from './site/site';
import { Settings } from './components/settings/settings';

export class WebSwitcher {
  sites: Site[];
  settings = new Settings();
  constructor(sites: Site[]) {
    this.sites = sites;
  }

  run(): void {
    this.settings.run(this.settings);
    // this.settings.app?.config;
    this.sites.forEach((site: Site) => {
      site.run(this.settings);
    });
  }
}
