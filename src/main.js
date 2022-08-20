const { createApp } = require('vue');
import App from "./App.vue";


// const app = createApp(App).mount("#app");
const app = createApp(App)
app.provide('$liff',window.liff)
app.mount("#app");