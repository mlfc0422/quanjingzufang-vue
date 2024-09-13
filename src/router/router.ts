import { createRouter, createWebHistory } from 'vue-router'
import UserRegister from "../components/UserRegister.vue";
import UserLogin from "../components/UserLogin.vue";
import RootLogin from "../components/RootLogin.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            redirect: '/UserLogin'
        },
        {
            path:'/RootLogin',
            component : RootLogin
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