import { reactive, ref } from "vue";

const useState = reactive({
    name: ref<string>("null"),
    clicked: ref<boolean>(false),
    clickNumber: ref<number>(0),
    propMessage: ref<string>("TEST"),
});

export default {
    name: "World",
    setup() {
        const propMessage = useState.propMessage;
        // return () => h('p', ['This is rendered via TSX: ', {this:propMessage}]);
        return () => <p>This is rendered via TSX: { propMessage }</p>;
    },
};
