import { createRouter, createWebHistory } from 'vue-router'
import rootIndex from "../components/RootIndex.vue";
import Login from "../components/Login.vue";
import Availability from "../views/Availability.vue";
import Orders from "../views/Orders.vue";
import Users from "../views/Users.vue";
import OrdersInfo from "../views/OrdersDetail.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            redirect: '/rootIndex'
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
        {
            path:'/login',
            component: Login
        }
    ]
})

export default router