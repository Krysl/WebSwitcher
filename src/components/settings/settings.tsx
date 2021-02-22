import { LogLevelDesc, LogLevelNumbers } from 'loglevel';
import { App, computed, createApp, defineComponent, ref, watch } from 'vue';
import {
  ElButton,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElContainer,
  ElHeader,
  ElInput,
  ElMain,
  ElRow,
  ElSlider,
  ElSwitch,
} from 'element-plus';
import '../../style/element-variables.scss';
import { Site } from '../../site/site';
import { debug, log, setLevel } from '../../utils/logger';
import { Config, useStore } from './config';

export const SettingsUI = defineComponent({
  name: 'SettingsUI',
  components: {
    ElContainer,
  },
  setup() {
    const store = useStore();
    const shortcutsCfg = computed(() => store.state.shortcuts);
    const debugLevel = computed({
      get: () => store.state.debugLevel,
      set: (val) => {
        store.state.debugLevel = val;
        setLevel(val);
      },
    });
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
    const shortcutsText = ref<string>('');
    watch(shortcutsText, () => {
      debug(`shortcuts => ${shortcutsText.value}`);
    });
    const shortcutsListener = (event: KeyboardEvent) => {
      let str = '';
      if (event.ctrlKey) str += 'Ctrl+';
      if (event.shiftKey) str += 'Shift+';
      if (event.altKey) str += 'Alt+';
      if (event.code.match(/^(Alt|Shift|Control)/) === null) str += event.code;
      shortcutsText.value = str;
    };
    const setShortcutsFn = (payload: FocusEvent) => {
      debug('setShortcuts', payload.type);
      if (payload.type === 'focus') {
        shortcutsCfg.value.enable = false;
        window.addEventListener('keydown', shortcutsListener);
      } else if (payload.type === 'blur') {
        shortcutsCfg.value.enable = true;
        window.removeEventListener('keydown', shortcutsListener);
      }
    };
    const _marks = new Map<number, string>([]); // reverse
    const step = 100.0 / (log.levels.SILENT - log.levels.TRACE);
    const debugNumMap = new Map<string, number>([]);
    Object.keys(log.levels).forEach((str, n) => {
      _marks.set(100 - n * step, str.toLowerCase());
      debugNumMap.set(str.toLowerCase(), n as LogLevelNumbers);
    });
    function convertMapToObject<K, V>(map: Map<K, V>): Record<string, V> {
      const newObject: Record<string, V> = {} as Record<string, V>;
      for (const [key, value] of map) {
        newObject[String(key)] = value;
      }
      return newObject;
    }
    const marks = convertMapToObject(_marks);

    debug(`step=${step}`);
    const debugLevelNum = computed({ // reverse
      get: () => {
        const val = debugLevel.value;
        let ret = 0;
        if (typeof val === 'string') {
          const _debugNum = debugNumMap.get((val as string).toLowerCase());
          if (_debugNum) ret = _debugNum;
        } else if (typeof val === 'number') {
          ret = val as number;
        }
        return 100 - ret * step;
      },
      set: (val) => {
        const levelStr = marks[val];
        debug(`levelStr=${levelStr}`);
        if (levelStr) debugLevel.value = levelStr as LogLevelDesc;
      },
    });
    if (debugLevelNum.value) {
      const _val = Math.floor(debugLevelNum.value / step);
      if (_val >= log.levels.TRACE && _val <= log.levels.SILENT) {
        setLevel(_val as LogLevelDesc);
      }
      debug(`debugLevelNum=${debugLevelNum.value}`);
    }

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
            <span>设置</span>
            <ElButton
              type="danger"
              icon="el-icon-close"
              size="small"
              onClick={closeFn}
              // circle
            ></ElButton>
          </ElRow>
        </ElHeader>
        <ElMain>
          <ElCollapse v-model={activeNames.value}>
            <ElCollapseItem title="快捷键" name="shortcuts">
              <span>显示设置界面</span>
              <ElInput
                placeholder="请按下快捷键"
                vModel={shortcutsText.value}
                clearable
                readonly
                onFocus={setShortcutsFn}
                onBlur={setShortcutsFn}
              ></ElInput>
            </ElCollapseItem>
          </ElCollapse>
          <ElCollapse v-model={activeNames.value}>
            <ElCollapseItem title="更多设置" name="moreSettings">
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
              <ElRow type="flex" justify="space-between">
                <ElCol span={7} style="margin: auto 0;">
                  <span>调试日志级别</span>
                </ElCol>
                <ElCol span={16}>
                  <ElRow type="flex" justify="end">
                    <ElCol>
                      <ElSlider
                        vModel={debugLevelNum.value}
                        min={log.levels.TRACE * step}
                        max={log.levels.SILENT * step}
                        step={step}
                        showStops={true}
                        marks={marks}
                      ></ElSlider>
                    </ElCol>
                  </ElRow>
                </ElCol>
              </ElRow>
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
