import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import app from "./App.vue";
import router from "./router/router.ts";


createApp(App).mount('#app')
app.use(ElementPlus)
app.use(router)

