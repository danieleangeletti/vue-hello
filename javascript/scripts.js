const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Hello world!",
            logo_image: "./img/Logo.png"
        }
    }
}).mount("#root");