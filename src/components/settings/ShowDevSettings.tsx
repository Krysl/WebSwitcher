import { ElCol, ElRow, ElSwitch } from 'element-plus';
import { computed, defineComponent } from 'vue';
import { useStore } from './config';

export default defineComponent({
  name: 'ShowDevSettings',
  setup() {
    const store = useStore();

    const showHiddenSettings = computed(() => store.state.showHiddenSettings);
    const showDevSettings = computed({
      get: () => store.state.showDevSettings,
      set: (val) => (store.state.showDevSettings = val),
    });
    return () => (
      <ElRow
        vShow={showHiddenSettings.value}
        type="flex"
        justify="space-between"
      >
        <ElCol span={16} style="margin: auto 0;">
          <span>显示开发者选项</span>
        </ElCol>
        <ElCol span={4} style="margin: auto 0;">
          <ElRow type="flex" justify="end">
            <ElSwitch vModel={showDevSettings.value}></ElSwitch>
          </ElRow>
        </ElCol>
      </ElRow>
    );
  },
});
