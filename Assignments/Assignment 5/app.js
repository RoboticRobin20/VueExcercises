const app = Vue.createApp({
    data() {
        return {
            inputTask: '',
            tasks: [],
            show: true
        };
    },
    computed: {
        buttonText(){
            return this.show ? "Hide list": "Show list";
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.inputTask);
        },
        toggleVisible(){
            this.show = !this.show;
        }
    }
});

app.mount('#assignment');