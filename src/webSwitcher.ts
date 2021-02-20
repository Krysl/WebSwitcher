import { Site } from './site/site';

export class WebSwitcher {
  sites: Site[];
  constructor(sites: Site[]) {
    this.sites = sites;
  }

  run(): void {
    this.sites.forEach((site: Site) => {
      site.run();
    });
  }
}
