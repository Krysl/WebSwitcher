import { GoogleHP } from './site/GoogleHP';
import { WebSwitcher } from './webSwitcher';
import { Baidu } from './site/Baidu';
import { Google } from './site/Google';

console.debug('script start');

const webSwitcher = new WebSwitcher([
  new Baidu(),
  new Google(),
  new GoogleHP(),
]);

webSwitcher.run();
