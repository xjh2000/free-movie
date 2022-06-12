import {createApp} from 'vue'
import App from './App.vue'

// open pwa support
// @ts-ignore
import {useRegisterSW} from "virtual:pwa-register/vue";
import router from "./routers/router";
import {createPinia} from "pinia";
import './index.css';

useRegisterSW();


let app = createApp(App);
let pinia = createPinia();
pinia.use(({store}) => {
    store.$subscribe((mutation, state) => {
        localStorage.setItem(mutation.storeId, JSON.stringify(state));
    });
});
// 功能注册
app.use(router);
app.use(pinia);

app.mount('#app');


// localStorageOfUserStore();