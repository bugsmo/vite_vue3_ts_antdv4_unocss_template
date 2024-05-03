import { createApp } from 'vue'
import 'vue-global-api'
import './style.css'
import App from './App.vue'
import { setupRouter } from 'Plugins/router'

const app = createApp(App)
async function setupApp() {
  // 挂载路由
  await setupRouter(app)

  app.mount('#app')
}

setupApp()
