import { ElCol, ElRow, ElSwitch } from 'element-plus';
import { computed, defineComponent } from 'vue';
import { useStore } from './config';

export default defineComponent({
  name: 'ShowHiddenSettings',
  setup() {
    const store = useStore();
    const showHiddenSettings = computed({
      get: () => store.state.showHiddenSettings,
      set: (val) => (store.state.showHiddenSettings = val),
    });
    return () => (
      <ElRow type="flex" justify="space-between">
        <ElCol span={16} style="margin: auto 0;">
          <span>显示隐藏选项</span>
        </ElCol>
        <ElCol span={4} style="margin: auto 0;">
          <ElRow type="flex" justify="end">
            <ElSwitch vModel={showHiddenSettings.value}></ElSwitch>
          </ElRow>
        </ElCol>
      </ElRow>
    );
  },
});
