import { defineComponent, toRefs } from "vue";
import googleImg from "../../assets/googlelogo_color_92x30dp.png";
import SearchButton from "./SearchButton";

export default defineComponent({
    name: "GoogleButton",
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
                url="https://www.google.com/search?&q="
                css="height: 30px; width: 92px;"
                hasBackground={true}
            />
        );
    },
});
