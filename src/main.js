import { createApp } from "vue";
import App from "./Apps.vue"
import router from "./router";
import store from "./store";
// import VueDragscroll from 'vue-dragscroll'

createApp(App).use(store).use(router).mount("#app");
   