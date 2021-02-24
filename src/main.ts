import globalCSSVars from './utils/load_css';
import { GoogleHP } from './site/GoogleHP';
import { WebSwitcher } from './webSwitcher';
import { Baidu } from './site/Baidu';
import { Google } from './site/Google';

const webSwitcher = new WebSwitcher([
  new Baidu(),
  new Google(),
  new GoogleHP(),
]);

console.debug(globalCSSVars.size);

webSwitcher.run();
