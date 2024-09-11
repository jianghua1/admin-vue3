import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

// import 'reset-css'
// import '@unocss/reset/normalize.css'
// import '@unocss/reset/tailwind.css'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

import 'virtual:svg-icons-register'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { setupStore } from './store'
import { createPinia } from 'pinia'

import './assets/main.scss'
import ELAdminComponents from 'el-admin-components'
const app = createApp(App)
setupStore(app)
app.use(createPinia())
app.use(ElementPlus)
app.use(ELAdminComponents)
app.use(router)
app.mount('#app')
