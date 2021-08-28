/* eslint-disable */
// const _MutationObserver = window.MutationObserver as unknown as MutationObserver;

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

if (typeof window._MutationObserver !== 'function') {
  const iframe = document.createElement('iframe');
  document.body.appendChild(iframe);
  const _MutationObserver = (iframe.contentWindow as typeof window)
    .MutationObserver;
  window._MutationObserver = _MutationObserver;
}

// @ts-ignore
if (typeof window._MutationObserver !== 'undefined') {
  // @ts-ignore
  webSwitcher.run({
    mutationObserver: window._MutationObserver as MutationObserver,
  });
}
