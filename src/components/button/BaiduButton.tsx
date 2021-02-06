import { defineComponent, toRefs } from "vue";
import BaiduImg from "../../assets/baidu.svg";
import SearchButton from "./SearchButton";

export default defineComponent({
    name: "BaiduButton",
    props: {
        input: String,
    },
    setup(props) {
        const { input } = toRefs(props);
        return () => (
            <SearchButton
                input={input?.value}
                id="baidu"
                img={BaiduImg}
                url="https://www.baidu.com/s?wd="
                css="height: 24px; width: 24px;"
            />
        );
    },
});
