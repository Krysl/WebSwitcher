import { LogLevelDesc, LogLevelNumbers } from 'loglevel';
import { ElCol, ElRow, ElSlider } from 'element-plus';
import '../../style/element-variables.scss';
import { computed, defineComponent } from 'vue';
import { debug, log, setLevel } from '../../utils/logger';
import { useStore } from './config';

export default defineComponent({
  name: 'DebugLogLevel',
  setup() {
    const store = useStore();
    const showHiddenSettings = computed({
      get: () => store.state.showHiddenSettings,
      set: (val) => (store.state.showHiddenSettings = val),
    });
    const debugLevel = computed({
      get: () => store.state.debugLevel,
      set: (val) => {
        store.state.debugLevel = val;
        setLevel(val);
      },
    });
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
    const debugLevelNum = computed({
      // reverse
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
      <ElRow
        vShow={showHiddenSettings.value}
        type="flex"
        justify="space-between"
      >
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
    );
  },
});
