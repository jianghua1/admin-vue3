import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'el-admin-components/style'
import { I18nModule } from 'el-admin-components'
import ElAdminComponents from 'el-admin-components'

const app = createApp(App)
app.use(ElementPlus)
app.use(ElAdminComponents)

// I18nModule.localesMapLoader({
//   'zh-cn': {
//     components: {
//       'icon-picker': '1自定义的内容'
//     }
//   }
// })

app.use(I18nModule.i18nPlugin)

app.mount('#app')
