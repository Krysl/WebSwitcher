import {
  App,
  computed,
  createApp,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from 'vue';
import {
  ElButton,
  ElCol,
  ElCollapse,
  // ElCollapseItem,
  ElContainer,
  // ElHeader,
  // ElMain,
  ElMessageBox,
  ElNotification,
  ElRow,
  ElSwitch,
} from 'element-plus';
import { ElMain, ElHeader } from 'element-plus/lib/components/container';
import { ElCollapseItem } from 'element-plus/lib/components/collapse';
import { Action } from 'element-plus/lib/components/message-box/src/message-box.type';
// import '../../style/element-custom.scss';
// import 'element-plus/lib/theme-chalk/index.css';
import { Site } from '../../site/site';
import { debug, trace } from '../../utils/logger';
import { isShortcut, Shortcut2Str } from '../../utils/shortcut';
import pkg from '../../../package.json';
import { defaultConfig, useStore } from './config';
import DebugLogLevel from './DebugLogLevel';
import ShowHiddenSettings from './ShowHiddenSettings';
import Shortcuts from './Shortcuts';
import ResetSettings from './ResetSettings';
import ShowDevSettings from './ShowDevSettings';
import DevTools from './DevTools';

export const SettingsUI = defineComponent({
  name: 'SettingsUI',
  components: {
    ElContainer,
  },
  setup() {
    const store = useStore();
    const shortcuts = computed(() => store.state.shortcuts);
    const enableHomePage = computed({
      get: () => store.getters.currentSiteCfg?.showButtonForHomePage,
      set: (val) =>
        store.getters.currentSiteCfg &&
        (store.getters.currentSiteCfg.showButtonForHomePage = val),
    });
    const enableSearchPage = computed({
      get: () => store.getters.currentSiteCfg?.showButtonForSearchPage,
      set: (val) =>
        store.getters.currentSiteCfg &&
        (store.getters.currentSiteCfg.showButtonForSearchPage = val),
    });
    const backgroundColor = computed(
      () => store.state.style.settings.background
    );
    const enableHomePageModified = () => {
      debug(`enableHomePage value changed to : ${enableHomePage.value}`);
    };
    watch(enableHomePage, enableHomePageModified);
    const activeNames = ref<string[]>([
      'UI',
      // 'shortcuts',
      // 'moreSettings',
    ]);
    const showSettings = ref<boolean>(false);
    const onSave = () => {
      debug('close');
      store.dispatch('saveConfig');
      ElNotification({
        title: '成功',
        message: '配置保存成功',
        type: 'success',
        duration: 1000,
      });
      showSettings.value = false;
    };
    const onCancel = () => {
      debug('close');
      store.dispatch('cancelConfig');
      ElNotification({
        title: '放弃',
        message: '放弃保存',
        type: 'info',
        duration: 1000,
      });
      showSettings.value = false;
    };
    const onClose = () => {
      const haveChange = computed(() => store.getters.haveCfgChange);
      if (haveChange.value === true) {
        ElMessageBox({
          title: '关闭',
          message: '您正在关闭设置窗口, 是否需要保存修改后的配置?',
          confirmButtonText: '保存修改',
          cancelButtonText: '放弃修改',
          type: 'warning',
          distinguishCancelAndClose: true,
          showCancelButton: true,
          callback: (action: Action) => {
            switch (action) {
              case 'confirm':
                onSave();
                break;
              case 'close':
                break;
              case 'cancel':
                onCancel();
                break;
            }
          },
        });
      } else {
        showSettings.value = false;
      }
    };

    try {
      GM_registerMenuCommand('脚本设置', function () {
        showSettings.value = true;
      });
      GM_registerMenuCommand('使用反馈', function () {
        GM_openInTab(
          'https://greasyfork.org/zh-CN/scripts/421329-webswitcher-%E5%9C%A8%E7%99%BE%E5%BA%A6-%E8%B0%B7%E6%AD%8C%E4%B9%8B%E9%97%B4%E5%88%87%E6%8D%A2%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C/feedback',
          {
            active: true,
            insert: true,
            setParent: true,
          }
        );
      });
    } catch (e) {}

    const shortcutsListener = (event: KeyboardEvent) => {
      if (shortcuts.value.enable === false) return;

      shortcuts.value.showSettings.forEach((shortcut) => {
        trace(Shortcut2Str(event), Shortcut2Str(shortcut));
        if (isShortcut(event, shortcut)) {
          if (showSettings.value === true) {
            onClose();
          } else {
            showSettings.value = true;
          }
        }
      });
    };
    onMounted(() => {
      window.addEventListener('keydown', shortcutsListener);
    });
    onUnmounted(() => {
      window.removeEventListener('keydown', shortcutsListener);
    });

    return () => (
      <ElContainer
        key="webswitcher-settings"
        style={
          'width: 350px;' +
          `background: ${backgroundColor.value};` +
          'border: 1px solid #eee;' +
          'text-align: left;' +
          (showSettings.value === false ? 'display: none;' : 'display: block;')
        }
      >
        <ElHeader style="height:auto; padding: 5px; border-bottom: 1px solid grey;">
          <ElRow tag="flex" justify="space-between">
            <ElCol span={4} style="margin: auto 0;">
              <span>
                <b>设置</b>
              </span>
            </ElCol>
            <ElCol span={12} style="margin: auto 0;">
              <span style={'font-size: 12px;' + 'color: rgb(0,0,0, 0.5);'}>
                WebSwitcher {pkg.version}
                <br></br>
                在百度、谷歌之间切换搜索结果
              </span>
            </ElCol>
            <ElCol span={8}>
              <ElRow tag="flex" justify="end">
                <ElButton
                  type="danger"
                  icon="el-icon-close"
                  size="small"
                  onClick={onClose}
                ></ElButton>
              </ElRow>
            </ElCol>
          </ElRow>
        </ElHeader>
        <ElMain /* style={`background: ${backgroundColor.value};` } */>
          <ElCollapse v-model={activeNames.value}>
            <ElCollapseItem vSlots={{ title: () => <b>界面设置</b> }} name="UI">
              <ElRow tag="flex" justify="space-between">
                <ElCol span={16} style="margin: auto 0;">
                  <span>在【首页】启用切换按钮</span>
                </ElCol>
                <ElCol span={4} style="margin: auto 0;">
                  <ElRow tag="flex" justify="end">
                    <ElSwitch v-model={enableHomePage.value}></ElSwitch>
                  </ElRow>
                </ElCol>
              </ElRow>
              <ElRow tag="flex" justify="space-between">
                <ElCol span={16} style="margin: auto 0;">
                  <span>在【搜索页面】启用切换按钮</span>
                </ElCol>
                <ElCol span={4} style="margin: auto 0;">
                  <ElRow tag="flex" justify="end">
                    <ElSwitch v-model={enableSearchPage.value}></ElSwitch>
                  </ElRow>
                </ElCol>
              </ElRow>
            </ElCollapseItem>
          </ElCollapse>
          <ElCollapse v-model={activeNames.value}>
            <ElCollapseItem
              vSlots={{ title: () => <b>快捷键设置</b> }}
              name="shortcuts"
            >
              <Shortcuts></Shortcuts>
            </ElCollapseItem>
          </ElCollapse>
          <ElCollapse v-model={activeNames.value}>
            <ElCollapseItem
              vSlots={{ title: () => <b>更多设置</b> }}
              name="moreSettings"
            >
              <ShowHiddenSettings></ShowHiddenSettings>
              <ShowDevSettings></ShowDevSettings>
              <DebugLogLevel></DebugLogLevel>
              <DevTools></DevTools>
              <ResetSettings></ResetSettings>
            </ElCollapseItem>
          </ElCollapse>
          <ElRow tag="flex" justify="space-around">
            <ElCol span={4} style="margin: auto 0;">
              <ElButton
                type="info"
                size="small"
                onClick={onCancel}
                style={'padding: 3px 7px;'}
              >
                放弃修改
              </ElButton>
            </ElCol>
            <ElCol span={4} style="margin: auto 0;">
              <ElButton
                type="primary"
                size="small"
                onClick={onSave}
                style={'padding: 3px 7px;'}
              >
                保存修改
              </ElButton>
            </ElCol>
          </ElRow>
        </ElMain>
      </ElContainer>
    );
  },
});

export class Settings extends Site {
  id = 'WebSwitcher_Settings';
  name = 'Settings';
  siteAddrReg = /.*/;
  mountElementName = 'body';
  container: HTMLElement | null = null;
  app: App<Element> | null = null;
  waitCondition = null;
  cfg = defaultConfig;

  beforeMount(): void {
    const isDebugOn = false;
    this.container = document.createElement('div');
    this.container.id = this.id;
    // this.container.style.display = 'block';
    this.container.style.zIndex = '1999';
    // this.container.style.backgroundColor = 'white';
    this.container.style.position = 'fixed';
    const clientWidth = document.documentElement.clientWidth;
    const vw = clientWidth / 100;
    let top = 3.9 * vw;
    let right = 8.8 * vw;
    this.container.style.top = `${top}px`;
    this.container.style.right = `${right}px`;
    this.container.draggable = true;

    const cross = document.createElement('div');
    cross.id = 'CrossLine';
    if (isDebugOn === false) cross.style.display = 'none';
    cross.style.backgroundColor = 'gray';
    cross.style.position = 'fixed';
    cross.style.width = '100px';
    cross.style.height = '100px';
    document.body.appendChild(cross);

    let dragstart: DragEvent | null = null;
    this.container.ondragover = (ev: DragEvent) => {
      ev.preventDefault();
    };
    this.container.ondragstart = (ev: DragEvent) => {
      console.debug('ondragstart', ev);
      dragstart = ev;
    };
    const limitNumber = (val: number, min: number, max: number): number => {
      let ret = val;
      if (ret < min) {
        ret = min;
      } else if (ret > max) {
        ret = max;
      }
      return ret;
    };
    let lastX = 0;
    let lastY = 0;
    this.container.ondragend = (ev: DragEvent) => {
      console.debug('ondragend', ev);
      if (dragstart) {
        top = lastY;
        right = lastX;
        dragstart = null;
      }
    };

    this.container.ondrag = (ev: DragEvent) => {
      if (dragstart) {
        if (isDebugOn) debug(`[${ev.clientX},${ev.clientY}]`);
        const clientX = ev.clientX;
        const clientY = ev.clientY;
        if (clientX !== 0 || clientY !== 0) {
          if (this.container) {
            const clientWidth = document.documentElement.clientWidth;
            const clientHeight = document.documentElement.clientHeight;
            const x = limitNumber(
              right - (clientX - dragstart.clientX),
              0,
              clientWidth - this.container.getBoundingClientRect().width
            );
            const y = limitNumber(
              top + (clientY - dragstart.clientY),
              0,
              clientHeight - this.container.getBoundingClientRect().height
            );
            cross.style.top = `${clientY}px`;
            cross.style.left = `${clientX}px`;
            this.container.style.top = `${y}px`;
            this.container.style.right = `${x}px`;
            lastX = x;
            lastY = y;
          }
        }
      }
    };

    this.app = createApp(SettingsUI);
  }

  async mount(): Promise<void> {
    const body = $(this.mountElementName);
    if (this.container) {
      body.append(this.container);
      this.app?.mount(this.container);
    }
  }
}
