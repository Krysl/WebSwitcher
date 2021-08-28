import { ElButton, ElMessage, ElRow } from 'element-plus';
import { ElButtonGroup } from 'element-plus/lib/components/button';
import { computed, defineComponent } from 'vue';
import { useStore } from './config';

type CallbackFn = () => unknown;
interface DevTool {
  title: string;
  callback: CallbackFn;
}

export default defineComponent({
  name: 'DebugLogLevel',
  setup() {
    const store = useStore();
    const showDevSettings = computed({
      get: () => store.state.showDevSettings,
      set: (val) => (store.state.showDevSettings = val),
    });
    const tools: DevTool[] = [
      {
        title: '打印保存的配置',
        callback: () => store.dispatch('printConfig'),
      },
      {
        title: '是否存在修改',
        callback: () => {
          const haveCfgChange = store.getters.haveCfgChange;
          ElMessage({
            message: haveCfgChange ? '存在修改' : '无修改',
            type: haveCfgChange ? 'error' : 'success',
            duration: 1000,
          });
        },
      },
      {
        title: '放弃保存',
        callback: () => store.dispatch('cancelConfig'),
      },
    ];
    return () => (
      <ElRow vShow={showDevSettings.value}>
        <ElButtonGroup>
          {tools.map((tool) => {
            return (
              <ElButton
                type="primary"
                size="small"
                onClick={tool.callback}
                style={'padding: 3px 8px; margin-top: 1px;'}
              >
                {tool.title}
              </ElButton>
            );
          })}
        </ElButtonGroup>
      </ElRow>
    );
  },
});
