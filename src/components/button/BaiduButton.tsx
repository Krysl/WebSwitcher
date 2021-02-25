import { SVG } from '@svgdotjs/svg.js';
import { defineComponent, toRefs } from 'vue';
import BaiduImg from '../../assets/baidu.svg';
import { Base64Decode, Base64Encode } from '../../utils/base64';
import SearchButton from './SearchButton';

export default defineComponent({
  name: 'BaiduButton',
  props: {
    input: String,
  },
  setup(props) {
    const { input } = toRefs(props);
    const imgHead = 'data:image/svg+xml;base64,';
    const isSVG = (BaiduImg as string).startsWith(imgHead);
    const base64Str = BaiduImg.substring(imgHead.length);

    console.assert(isSVG === true);
    const svgStr = Base64Decode(base64Str);
    // debug('svgStr=', isSVG, svgStr);
    const oParser = new DOMParser();
    const oDOM = oParser.parseFromString(svgStr, 'image/svg+xml');
    // debug('svg dom=', oDOM);
    const svg = SVG(oDOM.firstChild);
    // @ts-ignore
    svg.find('#Rectangle-2').fill('#3388FF');
    // @ts-ignore
    svg.find('#搜索_熊掌_66icon').fill('#FFFFFF');

    const s = new XMLSerializer();
    const _imgStr = s.serializeToString(svg.node);
    const _img = imgHead + Base64Encode(_imgStr);

    // debug('_img=', _img);
    return () => (
      <SearchButton
        input={input?.value}
        id="baidu"
        img={_img}
        imgSize={{ w: 80, h: 80 }}
        url="https://www.baidu.com/s?wd="
        css={
          'height: 100%; width: 96px;' +
          'background: #3388FF;' +
          'border-radius: 24px;'
        }
      />
    );
  },
});
