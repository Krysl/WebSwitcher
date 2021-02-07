import * as $ from "jquery";
import {
    defineComponent,
    onMounted,
    onUnmounted,
    PropType,
    ref,
    toRefs,
} from "vue";
import URLButton from "./URLButton";

interface Size {
    w: Number;
    h: Number;
}
export default defineComponent({
    name: "SearchButton",
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
            if (
                (event.altKey === true &&
                    event.shiftKey === false &&
                    event.ctrlKey === false &&
                    event.code === "KeyS") ||
                (event.altKey === false &&
                    event.shiftKey === true &&
                    event.ctrlKey === true &&
                    event.code === "Enter")
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
