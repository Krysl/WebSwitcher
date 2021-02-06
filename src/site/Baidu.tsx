import { defineComponent } from "vue";
import GoogleButton from "../components/button/GoogleButton";

export default defineComponent({
    name: "Baidu",
    setup(props) {
        return () => <GoogleButton input="#kw" />;
    },
});
