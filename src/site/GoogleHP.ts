import { Google } from './Google';

export class GoogleHP extends Google {
  name = 'GoogleHP';
  siteAddrReg = /www\.google\.com((\.\w+)?\/?(webhp.*)?)$/;
  mountElementName = '.XDyW0e:first';

  async mount(): Promise<void> {
    const searchRow = $('.SDkEP');
    searchRow.css('padding-right', 6);
    if (this.container !== null) {
      this.container.style.margin = '2.4%';
    }
    await super.mount();
  }
}
