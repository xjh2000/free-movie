import {createApp} from 'vue'
import App from './App.vue'

// open pwa support
// @ts-ignore
import {useRegisterSW} from "virtual:pwa-register/vue";
import {createRouter, createWebHashHistory} from "vue-router";
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'


useRegisterSW();


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: HelloWorld},
        {path: '/about', component: About},
    ],
})


let app = createApp(App);
app.use(router);
app.mount('#app');
