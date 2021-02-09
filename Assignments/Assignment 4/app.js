const app = Vue.createApp({
    data() {
        return {
            pclass: '',
            visible: true,
            color: ''
        };
    },
    computed: {
        paraClasses() {
            return {
                user1: this.pclass === "user1",
                user2: this.pclass === "user2",
                visible: this.paragraphIsVisible,
                hidden: !this.paragraphIsVisible
            }
        },
        paragraphIsVisible() {
            if(this.visible){
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        toggleVisible(){
            this.visible = !this.visible;
        }
    }
});

app.mount("#assignment");