import { defineComponent } from "vue";
import BaiduButton from "../components/button/BaiduButton";

export default defineComponent({
    name: "Google",
    setup(props) {
        return () => <BaiduButton input=".gLFyf.gsfi:first" />;
    },
});
