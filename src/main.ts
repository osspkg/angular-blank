import 'primevue/resources/themes/aura-light-green/theme.css'
import './assets/main.scss'

import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(PrimeVue)
app.use(pinia)

app.mount('#app')
