import {createRouter, createWebHistory} from 'vue-router'
import rootIndex from "../components/RootIndex.vue";
import UserRegister from "../components/UserRegister.vue";
import UserLogin from "../components/UserLogin.vue";
import RootLogin from "../components/RootLogin.vue";
import UserIndex from "../components/UserIndex.vue";
import RootOrders from "../views/RootOrders.vue";
import RootUsers from "../views/RootUsers.vue";
import RootOrdersDetail from "../views/RootOrdersDetail.vue";
import UserOrdersDetail from "../views/UserOrdersDetail.vue";
import RootProperty from "../views/RootProperty.vue";
import PaySuccess from "../views/PaySuccess.vue";
import UserProperty from "../views/UserProperty.vue";
import UserPropertyDetails from "../views/UserPropertyDetails.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/userLogin'
        },
        {
            path: '/userLogin',
            component: UserLogin
        },
        {
            path: '/rootLogin',
            component: RootLogin
        },
        {
            path: '/userRegister',
            component: UserRegister
        },
        {
            path: '/paySuccess',
            component: PaySuccess
        },
        {
            path: '/userIndex',
            name: 'userIndex',
            component: UserIndex,
            children: [
                {
                    path: 'userProperty',
                    component: UserProperty
                },
                {
                    path: 'userPropertyDetails',
                    component: UserPropertyDetails
                },
                {
                    path: 'userOrdersDetail',
                    component: UserOrdersDetail
                }
            ]
        },
        {
            path: '/rootIndex',
            name: 'rootIndex',
            component: rootIndex,
            children: [
                {
                    path: '/rootProperty',
                    component: RootProperty
                },
                {
                    path: '/rootOrders',
                    component: RootOrders
                },
                {
                    path: '/rootUsers',
                    component: RootUsers
                },
                {
                    path: '/rootOrdersDetail',
                    component: RootOrdersDetail
                },
            ]
        },
    ]
})

export default router