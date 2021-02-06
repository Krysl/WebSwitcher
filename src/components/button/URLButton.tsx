import { computed, defineComponent, PropType, ref, toRefs } from "vue";

interface ButtonStyle {
    defaultColor: String;
    highlightColor: String;
}

// const isHover = ref<Boolean>(false);

export default defineComponent({
    name: "URLButton",
    props: {
        id: String,
        img: String,
        url: String,
        style: {
            type: Object as PropType<ButtonStyle>,
            required: false,
            default: {
                defaultColor: "#424242",
                highlightColor: "#666666",
            } as ButtonStyle,
        },
        css: String,
        hasBackground: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    setup(props) {
        const { id, img, url, style, css, hasBackground } = toRefs(props);
        const isHover = ref<Boolean>(false);
        const color = computed(() =>
            isHover.value
                ? style.value.highlightColor
                : style.value.defaultColor
        );
        const setColor = (_isHover: boolean) => {
            console.debug(`setColor=${_isHover}`);
            isHover.value = _isHover;
        };
        const _css = computed(() => {
            let __css = css?.value;
            if (__css === undefined) {
                __css = `height:30px;`;
            }
            __css += " display: inline-block; ";
            if (hasBackground.value) {
                __css +=
                    `background-color:${color.value};` +
                    `border-radius:10px 10px 10px 10px;` +
                    `border:5px solid ${color.value};`;
            }
            return __css;
        });

        return () => (
            // <a id={id?.value} href={url?.value}>
            //     <img
            //         src={img?.value}
            //         style={_css}
            //         onMouseover={(e) => setColor(true)}
            //         onMouseout={(e) => setColor(false)}
            //     />
            // </a>
            <a id={id?.value} href={url?.value}>
                <div
                    style={_css.value}
                    onMouseover={(e) => setColor(true)}
                    onMouseout={(e) => setColor(false)}
                >
                    <img
                        src={img?.value}
                        style="height:100%; width:100%; vertical-align: middle; display: inline-block;"
                    />
                </div>
            </a>
        );
    },
});
