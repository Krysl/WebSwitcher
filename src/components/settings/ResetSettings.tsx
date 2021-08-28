import { SVG } from '@svgdotjs/svg.js';
import {
  ElButton,
  ElCol,
  ElMessageBox,
  ElNotification,
  ElRow,
} from 'element-plus';
import { computed, defineComponent } from 'vue';
import { Action } from 'element-plus/lib/components/message-box/src/message-box.type';
import { Base64Decode, Base64Encode } from '../../utils/base64';
import RecoveryImg from '../../assets/Recovery.svg';
import { hasOwnProperty } from '../../utils/object';
import { useStore } from './config';

export default defineComponent({
  name: 'ResetSettings',
  setup() {
    const store = useStore();
    const showHiddenSettings = computed({
      get: () => store.state.showHiddenSettings,
      set: (val) => (store.state.showHiddenSettings = val),
    });
    const onClick = () => {
      ElMessageBox({
        title: '重置',
        message: '此操作将重置所有选项到默认值, 是否继续?',
        confirmButtonText: '重置',
        cancelButtonText: '放弃',
        type: 'warning',
        showClose: false,
        showCancelButton: true,
        callback: (action: Action) => {
          switch (action) {
            case 'confirm':
              store.dispatch('resetConfig');
              ElNotification({
                title: '成功',
                message: '重置选项成功',
                type: 'success',
                duration: 1000,
              });
              break;
            case 'close':
            case 'cancel':
              ElNotification({
                title: '放弃',
                message: '放弃重置选项',
                type: 'info',
                duration: 1000,
              });
              break;

            default:
              break;
          }
        },
      });
    };

    const imgHead = 'data:image/svg+xml;base64,';
    const isSVG = (RecoveryImg as string).startsWith(imgHead);
    const base64Str = RecoveryImg.substring(imgHead.length);

    console.assert(isSVG === true);
    const svgStr = Base64Decode(base64Str);
    const oParser = new DOMParser();
    const oDOM = oParser.parseFromString(svgStr, 'image/svg+xml');
    // for (const node of oDOM.firstChild?.childNodes) {
    // }
    const nodeToRemove: ChildNode[] = [];
    if (
      typeof oDOM.firstChild === 'object' &&
      oDOM.firstChild !== null &&
      hasOwnProperty(oDOM.firstChild, 'viewBox')
    ) {
      const viewBox = oDOM.firstChild.viewBox as SVGAnimatedRect;
      if (viewBox instanceof SVGAnimatedRect) {
        // viewBox = new SVGRect(0, 0, 100, 100);
        viewBox.baseVal.height = 100;
      }
    }
    oDOM.firstChild?.childNodes.forEach((childNode) => {
      if (childNode.nodeName === 'text') {
        // childNode.remove();
        nodeToRemove.push(childNode);
      }
    });
    nodeToRemove.forEach((n) => n.remove());
    // debug('svg dom=', oDOM);
    const svg = SVG(oDOM.firstChild);
    svg.size(100, 100);
    // @ts-ignore
    svg.find('#Recovery').fill('#FFFFFF');

    const s = new XMLSerializer();
    const _imgStr = s.serializeToString(svg.node);
    const _img = imgHead + Base64Encode(_imgStr);
    return () => (
      <ElRow
        vShow={showHiddenSettings.value}
        tag="flex"
        justify="space-between"
      >
        <ElCol span={16} style="margin: auto 0;">
          <span>重置所有选项到默认值</span>
        </ElCol>
        <ElCol span={8}>
          <ElRow tag="flex" justify="end">
            <ElButton
              type="danger"
              size="small"
              onClick={onClick}
              style={'padding: 3px 7px;'}
            >
              <img
                width={22}
                src={_img}
                style="top: 4px; position: relative;"
              ></img>
            </ElButton>
          </ElRow>
        </ElCol>
      </ElRow>
    );
  },
});
