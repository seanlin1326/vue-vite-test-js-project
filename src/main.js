import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
import { vuetify } from "./plugin/vuetify.js";
import "./assets/style.css/";

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
