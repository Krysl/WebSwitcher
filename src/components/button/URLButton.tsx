import {
    computed,
    defineComponent,
    PropType,
    ref,
    toRefs
} from "vue";

interface ButtonStyle {
    defaultColor: String;
    highlightColor: String;
}
interface Size {
    w: Number;
    h: Number;
}

export default defineComponent({
    name: "URLButton",
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
        style: {
            type: Object as PropType<ButtonStyle>,
            required: false,
            default: {
                defaultColor: "#424242",
                highlightColor: "#666666",
            } as ButtonStyle,
        },
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
        hasBackground: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    setup(props) {
        const {
            id,
            img,
            imgSize,
            url,
            style,
            isInline,
            offset,
            css,
            imgcss,
            hasBackground,
        } = toRefs(props);
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
                __css = `height:30px;` + " display: inline-block; ";
            }
            if (hasBackground.value) {
                __css +=
                    `background-color:${color.value};` +
                    `border-radius:10px 10px 10px 10px;`;
            }
            return __css;
        });
        let imgH:number = imgSize.value.h.valueOf();
        if (imgH === undefined) {
            imgH = 100;
        } else if (imgH > 0 && imgH <= 1) {
            imgH *= 100;
        } else if (imgH > 1 && imgH <= 100) {
        }
        let imgW:number = imgSize.value.w.valueOf();
        if (imgW === undefined) {
            imgW = 100;
        } else if (imgW > 0 && imgW <= 1) {
            imgW *= 100;
        } else if (imgW > 1 && imgW <= 100) {
        }

        return () => (
            <a
                id={id?.value}
                href={url?.value}
                style={"height:100%; width:100%;"}
            >
                <div
                    style={_css.value}
                    onMouseover={(e) => setColor(true)}
                    onMouseout={(e) => setColor(false)}
                >
                    <div
                        style={
                            "height:100%; width:100%;" +
                            "flex-direction:column;" +
                            `display:${isInline.value ? "inline-" : ""}flex;` +
                            `position: relative; top: ${offset.value.h}px; left:${offset.value.w}`
                        }
                    >
                        <div style={`height:${(100 - imgH) / 2}%;`}></div>
                        <div
                            style={
                                `height:${imgH}%; width:100%;` +
                                "flex-direction:row;" +
                                `display:${
                                    isInline.value ? "inline-" : ""
                                }flex;`
                            }
                        >
                            <div style={`width:${(100 - imgW) / 2}%;`}></div>
                            <img
                                src={img?.value}
                                style={
                                    imgcss?.value === undefined
                                        ? `height:100%; width:${imgW}%; vertical-align: middle; display: inline-block;`
                                        : `height:100%; width:${imgW}%; ` +
                                          imgcss?.value
                                }
                            />
                        </div>
                    </div>
                </div>
            </a>
        );
    },
});
