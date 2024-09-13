import { createRouter, createWebHistory } from 'vue-router'
import Login from "../components/Login.vue";
import UserRegister from "../components/UserRegister.vue";
import UserLogin from "../components/UserLogin.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            redirect: '/UserLogin'
        },
        {
            path:'/Login',
            component : Login
        },
        {
            path:'/UserRegister',
            component : UserRegister
        },
        {
            path:'/UserLogin',
            component : UserLogin
        },

    ]
})

export default router