import * as $ from 'jquery';
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  ref,
  toRefs,
} from 'vue';
import { debug } from '../../utils/logger';
import { isShortcut } from '../../utils/shortcut';
import { useStore } from '../settings/config';
import URLButton from './URLButton';

interface Size {
  w: number;
  h: number;
}
export default defineComponent({
  name: 'SearchButton',
  props: {
    id: String,
    img: String,
    imgSize: {
      type: Object as PropType<Size>,
      required: false,
      default: {
        w: 80,
        h: 80,
      } as Size,
    },
    url: String,
    input: String,
    isInline: { type: Boolean, require: false, default: false },
    offset: {
      type: Object as PropType<Size>,
      required: false,
      default: {
        w: 0,
        h: 0,
      } as Size,
    },
    css: String,
    imgcss: String,
    hasBackground: Boolean,
  },
  setup(props) {
    const {
      id,
      img,
      imgSize,
      url,
      input,
      isInline,
      offset,
      css,
      imgcss,
      hasBackground,
    } = toRefs(props);
    const store = useStore();
    const _url = ref(url?.value);
    const _onChange = () => {
      if (input?.value) {
        const txt = $(input?.value)?.val();
        if (txt && !Array.isArray(txt) && _url?.value) {
          _url.value = url?.value + encodeURIComponent(txt);
          debug(`URL => ${_url?.value}`);
        }
      }
    };
    const shortcuts = computed(() => store.state.shortcuts);
    const shortcutsListener = (event: KeyboardEvent) => {
      if (shortcuts.value.enable === false) return;

      shortcuts.value.altSearch.forEach((shortcut) => {
        if (isShortcut(event, shortcut)) {
          debug(event);
          _onChange();
          if (_url?.value) {
            location.href = _url?.value;
          }
        }
      });
    };
    onMounted(() => {
      debug('SearchButton: onMounted');
      _onChange();
      if (input?.value) {
        debug(`SearchButton: onMounted ${input?.value}`);
        $(input?.value).change(_onChange);
      }
      window.addEventListener('keydown', shortcutsListener);
    });
    onUnmounted(() => {
      window.removeEventListener('keydown', shortcutsListener);
    });
    return () => (
      <URLButton
        id={id?.value}
        img={img?.value}
        imgSize={imgSize?.value}
        url={_url?.value}
        isInline={isInline?.value}
        offset={offset?.value}
        css={css?.value}
        imgcss={imgcss?.value}
        hasBackground={hasBackground?.value}
      />
    );
  },
});
