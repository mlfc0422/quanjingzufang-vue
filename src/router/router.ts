import { createRouter, createWebHistory } from 'vue-router'
import rootIndex from "../components/RootIndex.vue";
import RootAvailability from "../views/RootAvailability.vue";
import RootOrders from "../views/RootOrders.vue";
import RootUsers from "../views/RootUsers.vue";
import UserRegister from "../components/UserRegister.vue";
import UserLogin from "../components/UserLogin.vue";
import RootLogin from "../components/RootLogin.vue";
import RootOrdersDetail from "../views/RootOrdersDetail.vue";
import UserIndex from "../components/UserIndex.vue";
import UserOrdersDetail from "../views/UserOrdersDetail.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            redirect:'/UserLogin'
        },
        {
            path:'/UserLogin',
            component : UserLogin
        },
        {
            path:'/UserRegister',
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
            path:'/RootLogin',
            component : RootLogin
        },
        {

            path:'/rootIndex',
            name:'rootIndex',
            component:rootIndex,
            children:[
                {
                    path:'rootAvailability',
                    component:RootAvailability
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
                }
            ]
        },
    ]
})

export default router