import { createRouter, createWebHistory } from 'vue-router'
import rootIndex from "../components/RootIndex.vue";
import Availability from "../views/Availability.vue";
import Orders from "../views/Orders.vue";
import Users from "../views/Users.vue";
import UserRegister from "../components/UserRegister.vue";
import UserLogin from "../components/UserLogin.vue";
import RootLogin from "../components/RootLogin.vue";
import OrdersInfo from "../views/OrdersDetail.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            redirect:'/UserLogin'
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
        {
            path:'/rootIndex',
            name:'rootIndex',
            component:rootIndex,
            children:[
                {
                    path:'availability',
                    component:Availability
                },
                {
                    path:'orders',
                    component:Orders
                },
                {
                    path:'users',
                    component:Users
                },
                {
                    path:'orders/info',
                    component:OrdersInfo
                }
            ]
        },
    ]
})

export default router