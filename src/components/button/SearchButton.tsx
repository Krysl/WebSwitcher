import * as $ from "jquery";
import { css } from "jquery";
import { defineComponent, onMounted, onUnmounted, ref, toRefs } from "vue";
import URLButton from "./URLButton";

export default defineComponent({
    name: "SearchButton",
    props: {
        id: String,
        img: String,
        url: String,
        input: String,
        css: String,
        hasBackground: Boolean,
    },
    setup(props) {
        const { id, img, url, input, css, hasBackground } = toRefs(props);
        const _url = ref(url?.value);
        const _onChange = () => {
            if (input?.value) {
                const txt = $(input?.value)?.val();
                if (txt && !Array.isArray(txt) && _url?.value) {
                    _url!.value = url?.value + encodeURIComponent(txt);
                    console.debug(`URL => ${_url?.value}`);
                }
            }
        };
        const shortcutsListener = (event: KeyboardEvent) => {
            if ((
                event.altKey === true &&
                event.shiftKey === false &&
                event.ctrlKey === false &&
                event.code === "KeyS")||(
                    event.altKey === false &&
                    event.shiftKey === true &&
                    event.ctrlKey === true &&
                    event.code === "Enter"
                )
            ) {
                console.log(event);
                _onChange();
                location.href = _url.value!;
            }
        };
        onMounted(() => {
            console.debug(`onMounted`);
            _onChange();
            if (input?.value) {
                console.debug(`onMounted ${input?.value}`);
                $(input?.value).change(_onChange);
            }
            window.addEventListener("keydown", shortcutsListener);
        });
        onUnmounted(() => {
            window.removeEventListener("keydown", shortcutsListener);
        });
        return () => (
            <URLButton
                id={id?.value}
                img={img?.value}
                url={_url?.value}
                css={css?.value}
                hasBackground={hasBackground?.value}
            />
        );
    },
});
