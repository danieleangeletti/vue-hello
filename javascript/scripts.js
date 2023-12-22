const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            count: 0,
            message: "Hello world!",
            logo_image: "./img/Logo.png",
        };
    },

    methods: {
        changeMessage() {
            this.message = `Counter ${this.count}`;
            this.count++;
        }
    }
})

app.mount("#root");
