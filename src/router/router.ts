import { createRouter, createWebHistory } from 'vue-router'
import rootIndex from "../components/RootIndex.vue";
import Property from "../views/Property.vue";
import Orders from "../views/Orders.vue";
import Users from "../views/Users.vue";
import UserRegister from "../components/UserRegister.vue";
import UserLogin from "../components/UserLogin.vue";
import RootLogin from "../components/RootLogin.vue";
import OrdersInfo from "../views/OrdersDetail.vue";
import UserIndex from "../components/UserIndex.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            redirect:'/userLogin'
        },
        {
            path:'/userLogin',
            component : UserLogin
        },
        {
            path:'/rootLogin',
            component : RootLogin
        },
        {
            path:'/userRegister',
            component : UserRegister
        },
        {
            path:'/userIndex',
            component : UserIndex,
            children:[
                {
                    path:'userOrders/detail',
                    component:UserOrdersDetail
                }
            ]
        },
        {
            path:'/rootIndex',
            name:'rootIndex',
            component:rootIndex,
            children:[
                {
                    path:'property',
                    component:Property
                },
                {
                    path:'rootOrders',
                    component:RootOrders
                },
                {
                    path:'rootUsers',
                    component:RootUsers
                },
                {
                    path:'rootOrders/detail',
                    component:RootOrdersDetail
                },
                {
                    path:'info',
                    component:OrdersInfo
                }
            ]
        },
        {
            path: '/userIndex',
            name: 'userIndex',
            component:UserIndex
        }
    ]
})

export default router