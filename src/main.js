import { createApp } from "vue";
import App from "./Apps.vue"
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)



// Vue.component('font-awesome-icon', FontAwesomeIcon)

// import VueDragscroll from 'vue-dragscroll'

createApp(App)
.use(store)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");
   