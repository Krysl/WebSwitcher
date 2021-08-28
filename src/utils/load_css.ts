import { elternalsCSS } from '../style/element-plus-elternals-css';
import pkg from '../../package.json';

async function loadElementPlusStyle() {
  const globalVars = new Map<string, string>();
  const version = pkg.dependencies['element-plus'];
  const ret = elternalsCSS.map(async (name) => {
    const globalName = `theme_chalk_${(typeof name === 'string'
      ? name
      : name.name
    ).replace(/-/g, '_')}`;
    let style = await GM_getResourceText(globalName).replaceAll(
      'url(',
      `url(https://cdn.jsdelivr.net/npm/element-plus@${version}/theme-chalk/`
    );
    if (typeof name !== 'string' && name.patch !== undefined) {
      for (const key in name.patch) {
        style = style.replaceAll(key, name.patch[key]);
      }
    }
    if (typeof window === 'undefined') {
      throw new Error('window undefined');
    }
    window[globalName] = style;
    GM_addStyle(style);
    globalVars.set(globalName, window[globalName]);
    // console.debug(`GM_addStyle: ${globalVars.get(globalName)}`);
  });
  await Promise.all(ret);
  return globalVars;
}

const globalCSSVars = await loadElementPlusStyle();

export default globalCSSVars;
