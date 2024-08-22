import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'
// import 'reset-css'
// import '@unocss/reset/normalize.css'
// import '@unocss/reset/tailwind.css'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

import 'virtual:svg-icons-register'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { setupStore } from './store'

const app = createApp(App)

setupStore(app)

app.use(router)
app.mount('#app')
