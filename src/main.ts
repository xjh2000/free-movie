import {createApp} from 'vue'
import App from './App.vue'

// @ts-ignore
import {useRegisterSW} from "virtual:pwa-register/vue";

useRegisterSW();
createApp(App).mount('#app')
