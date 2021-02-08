import { defineComponent, toRefs } from 'vue';
import googleImg from '../../assets/googlelogo_color_92x30dp.png';
import SearchButton from './SearchButton';

export default defineComponent({
  name: 'GoogleButton',
  props: {
    input: String,
  },
  setup(props) {
    const { input } = toRefs(props);
    return () => (
      <SearchButton
        input={input?.value}
        id="google"
        img={googleImg}
        imgSize={{ w: 92.0 / 102, h: 75 }}
        url="https://www.google.com/search?&q="
        isInline={true}
        offset={{ w: 0, h: -6 }}
        css={'height: 100%;width: 102px;' + 'display: inline-block;'}
        hasBackground={true}
      />
    );
  },
});
