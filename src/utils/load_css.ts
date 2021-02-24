import * as elternalsCSS from '../../config/element-plus-elternals-css';
import * as pkg from '../../package.json';

async function loadElementPlusStyle() {
  const globalVars = new Map<string, string>();
  const ret = elternalsCSS.map(async (name) => {
    const globalName = `theme_chalk_${name.replace(/-/g, '_')}`;
    const style = await GM_getResourceText(globalName).replaceAll(
      'url(',
      `url(https://cdn.jsdelivr.net/npm/element-plus@${pkg.dependencies['element-plus']}/lib/theme-chalk/`
    );
    window[globalName] = style;
    globalVars.set(globalName, window[globalName]);
  });
  await Promise.all(ret);

  GM_addStyle(
    await GM_getResourceText('theme_chalk_index').replaceAll(
      'url(',
      `url(https://cdn.jsdelivr.net/npm/element-plus@${pkg.dependencies['element-plus']}/lib/theme-chalk/`
    )
  );
  return globalVars;
}

const globalCSSVars = await loadElementPlusStyle();

export default globalCSSVars;
