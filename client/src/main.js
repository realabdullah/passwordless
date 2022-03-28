import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const vm = createApp(App).use(VueToast).mount('#app')

export default vm