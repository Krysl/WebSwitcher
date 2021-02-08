import { Baidu } from './site/Baidu';
import { Google } from './site/Google';
import { Site } from './site/site';

console.debug('script start');

[new Baidu(), new Google()].forEach((site: Site) => {
  site.run();
});
