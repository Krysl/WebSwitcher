import { ElButton, ElCol, ElDivider, ElInput, ElRow } from 'element-plus';
import { computed, defineComponent, Ref, ref } from 'vue';
import { debug } from '../../utils/logger';
import {
  setShortcutByEvent,
  ShortCut,
  Shortcut2Str,
} from '../../utils/shortcut';
import { useStore } from './config';

interface ShortcutUICfgs {
  title: string;
  isHide?: boolean;
  txt?: Array<Ref<string>>;
  onFocus?: Array<(event: FocusEvent) => void>;
  shortcuts: ShortCut[];
}

export default defineComponent({
  name: 'Shortcuts',
  setup() {
    const store = useStore();
    const showHiddenSettings = computed({
      get: () => store.state.showHiddenSettings,
      set: (val) => (store.state.showHiddenSettings = val),
    });
    const shortcutsCfg = computed(() => store.state.shortcuts);

    const shortcutUICfgs: ShortcutUICfgs[] = [
      {
        title: '切换搜索',
        shortcuts: store.state.shortcuts.altSearch,
      },
      {
        isHide: true,
        title: '显示设置界面',
        shortcuts: store.state.shortcuts.showSettings,
      },
    ];
    const setShortcutsFnFactory = (
      shortcutsText: Ref<string>,
      sc: ShortCut
    ) => {
      const shortcutsListener = (event: KeyboardEvent) => {
        shortcutsText.value = Shortcut2Str(event);
        debug(shortcutsText.value, event);
        setShortcutByEvent(sc, event);
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
      return setShortcutsFn;
    };
    let lastShowIdx = -1;
    shortcutUICfgs.forEach((cfg, idx) => {
      cfg.txt = new Array<Ref<string>>(cfg.shortcuts.length);
      cfg.onFocus = new Array<(event: FocusEvent) => void>(
        cfg.shortcuts.length
      );
      cfg.shortcuts.forEach((sc, idx) => {
        const txt = ref<string>(Shortcut2Str(sc));
        cfg.txt?.fill(txt, idx, idx + 1);
        cfg.onFocus?.fill(setShortcutsFnFactory(txt, sc), idx, idx + 1);
      });
      if (cfg.isHide !== true && idx > lastShowIdx) lastShowIdx = idx;
    });

    return () => (
      <div>
        {shortcutUICfgs.map((cfg, idx) => (
          <div>
            <ElRow
              vShow={
                cfg.isHide === undefined ||
                cfg.isHide === false ||
                showHiddenSettings.value
              }
              type="flex"
              justify="space-between"
            >
              <ElCol span={8} style="margin: auto 0;">
                <span>{cfg.title}</span>
              </ElCol>
              <ElCol span={16}>
                {cfg.shortcuts.map((sc, idx) => {
                  const shortcutsText = cfg.txt?.[idx] || ref('未初始化');
                  const onFocus =
                    cfg.onFocus?.[idx] ||
                    setShortcutsFnFactory(shortcutsText, sc);
                  return (
                    <ElRow type="flex" justify="end">
                      <ElCol span={20}>
                        <ElInput
                          placeholder="请按下快捷键"
                          vModel={shortcutsText.value}
                          clearable
                          readonly
                          onFocus={onFocus}
                          onBlur={onFocus}
                        ></ElInput>
                      </ElCol>
                      <ElCol span={4} style="margin: auto 0;">
                        <ElButton
                          type="danger"
                          icon="el-icon-delete"
                          size="small"
                          style={
                            'padding: 3px;' +
                            'min-height: fit-content;' +
                            'height: fit-content;'
                          }
                          onClick={() => {
                            cfg.txt?.splice(idx, 1);
                            const del = cfg.shortcuts.splice(idx, 1);
                            debug(
                              `delete ${del
                                .map((v) => Shortcut2Str(v))
                                .join(',')}`
                            );
                          }}
                          circle
                        ></ElButton>
                      </ElCol>
                    </ElRow>
                  );
                })}
                <ElRow type="flex" justify="space-around">
                  <ElButton
                    type="primary"
                    icon="el-icon-circle-plus-outline"
                    size="small"
                    style={
                      'padding: 3px;' +
                      'min-height: fit-content;' +
                      'height: fit-content;'
                    }
                    onClick={() => {
                      cfg.txt?.push(ref(''));
                      cfg.shortcuts.push({ code: '' });
                      debug('add');
                    }}
                    circle
                  ></ElButton>
                </ElRow>
              </ElCol>
            </ElRow>
            <ElDivider
              vShow={
                showHiddenSettings.value
                  ? idx + 1 < shortcutUICfgs.length
                  : cfg.isHide !== true
                    ? idx < lastShowIdx
                    : false
              }
              style="width: 80%; margin: 6px auto;"
            ></ElDivider>
          </div>
        ))}
      </div>
    );
  },
});
