import {createApp} from 'vue'
import App from './App.vue'

// open pwa support
// @ts-ignore
import {useRegisterSW} from "virtual:pwa-register/vue";
import router from "./routers/router";
import {createPinia} from "pinia";
import {localStorageOfUserStore} from "./store/UserStore";

useRegisterSW();


let app = createApp(App);
// 功能注册
app.use(router);
app.use(createPinia());

app.mount('#app');


localStorageOfUserStore();