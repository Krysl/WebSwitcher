import { App, createApp, defineComponent, ref, watch } from 'vue';
import {
  ElButton,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElContainer,
  ElHeader,
  ElMain,
  ElRow,
  ElSwitch,
} from 'element-plus';
import '../../style/element-variables.scss';
import { Site } from '../../site/site';
import { debug } from '../../utils/logger';
import { Config } from './config';
import DebugLogLevel from './DebugLogLevel';
import ShowHiddenSettings from './ShowHiddenSettings';
import Shortcuts from './Shortcuts';

export const SettingsUI = defineComponent({
  name: 'SettingsUI',
  components: {
    ElContainer,
  },
  setup() {
    const enableHomePage = ref<boolean>(true);
    const enableHomePageModified = () => {
      debug(`enableHomePage value changed to : ${enableHomePage.value}`);
    };
    watch(enableHomePage, enableHomePageModified);
    const activeNames = ref<string[]>(['shortcuts', 'moreSettings']);
    const showSettings = ref<boolean>(true);
    const closeFn = () => {
      debug('close');
      showSettings.value = false;
    };

    try {
      GM_registerMenuCommand('脚本设置', function () {
        showSettings.value = true;
      });
    } catch (e) {}

    return () => (
      <ElContainer
        key="webswitcher-settings"
        style={
          'width: 350px;' +
          'background: white;' +
          'border: 1px solid #eee;' +
          (showSettings.value === false ? 'display: none;' : 'display: block;')
        }
      >
        <ElHeader style="height:auto; padding: 5px; border-bottom: 1px solid grey;">
          <ElRow type="flex" justify="space-between">
            <ElCol span={8} style="margin: auto 0;">
              <span>
                <b>设置</b>
              </span>
            </ElCol>
            <ElCol span={16}>
              <ElRow type="flex" justify="end">
                <ElButton
                  type="danger"
                  icon="el-icon-close"
                  size="small"
                  onClick={closeFn}
                ></ElButton>
              </ElRow>
            </ElCol>
          </ElRow>
        </ElHeader>
        <ElMain>
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
              <ElRow type="flex" justify="space-between">
                <ElCol span={16} style="margin: auto 0;">
                  <span>在百度/谷歌的首页启用切换按钮</span>
                </ElCol>
                <ElCol span={4} style="margin: auto 0;">
                  <ElRow type="flex" justify="end">
                    <ElSwitch v-model={enableHomePage.value}></ElSwitch>
                  </ElRow>
                </ElCol>
              </ElRow>
              <DebugLogLevel></DebugLogLevel>
            </ElCollapseItem>
          </ElCollapse>
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
  cfg: Config | null = null;

  beforeMount(): void {
    this.cfg = new Config();
    this.container = document.createElement('div');
    this.container.id = this.id;
    // this.container.style.display = 'block';
    this.container.style.zIndex = '999999';
    // this.container.style.backgroundColor = 'white';
    this.container.style.position = 'fixed';
    this.container.style.top = '3.9vw';
    this.container.style.right = '8.8vw';
    this.app = createApp(SettingsUI);
    // this.app.component(ElContainer.name, ElContainer);
  }

  async mount(): Promise<void> {
    const body = $(this.mountElementName);
    if (this.container) {
      body.append(this.container);
      this.app?.mount(this.container);
    }
  }
}
