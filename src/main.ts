import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router/router.ts";
import axios from "axios";



const app = createApp(App)
// 从 localStorage 或其他地方获取 Token
const token = localStorage.getItem('jwt_token');
// 设置 Axios 全局请求头
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
// 将 axios 绑定到 Vue 实例
app.config.globalProperties.$axios = axios;
app.use(router)
app.use(ElementPlus)
app.mount('#app')
