const { createApp } = require('vue');
import App from "./App.vue";
import './index.css'


// const app = createApp(App).mount("#app");
const app = createApp(App)
app.provide('$liff',window.liff)
app.mount("#app");