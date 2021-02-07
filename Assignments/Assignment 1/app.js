const app = Vue.createApp({
    data() {
        return {
            name: 'Robin',
            age: 20,
            imageUrl: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat-800x400.png'
        };
    },
    methods: {
        calculateAge(){
            return this.age + 5;
        },
        calculateRandom(){
            return Math.random();
        }
    }
});

app.mount('#assignment')