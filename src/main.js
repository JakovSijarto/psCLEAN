import { createApp } from 'vue'
import './style.css'
import App from '../src/components/App.vue'
import Router from './router'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'

createApp(App).use(Router).use(VueTabs).mount('#app')
