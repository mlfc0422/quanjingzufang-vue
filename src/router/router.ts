import {createRouter, createWebHistory} from 'vue-router'
import rootIndex from "../components/RootIndex.vue";
import UserRegister from "../components/UserRegister.vue";
import UserLogin from "../components/UserLogin.vue";
import RootLogin from "../components/RootLogin.vue";
import UserIndex from "../components/UserIndex.vue";
import RootOrders from "../views/RootOrders.vue";
import RootUsers from "../views/RootUsers.vue";
import RootOrdersDetail from "../views/RootOrdersDetail.vue";
import RootProperty from "../views/RootProperty.vue";
import PaySuccess from "../views/PaySuccess.vue";
import UserProperty from "../views/UserProperty.vue";
import UserPropertyDetails from "../views/UserPropertyDetails.vue";
import UserMine from "../views/UserMine.vue";
import UserRelease from "../views/UserRelease.vue";
import UserInformation from "../views/UserInformation.vue";
import UserOrders from "../views/UserOrders.vue";
import UserCollection from "../views/UserCollection.vue";
import UserConfirmationPayment from "../views/UserConfirmationPayment.vue";
import userOrdersDetail from "../views/UserOrdersDetail.vue";
import UserForget from "../components/UserForget.vue";
import MapContainer from "../components/MapContainer.vue";
import MapCode from "../components/MapCode.vue";
import RootPropertyDetail from "../views/RootPropertyDetail.vue";
import RootUsersDetail from "../views/RootUsersDetail.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/mapcode',
            component: MapCode
        },
        {
            path: '/map',
            component: MapContainer
        },
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
        },
        {
            path: '/userProperty',
            component: UserProperty
        },
        {
            path: '/userPropertyDetails/:id',
            name: 'UserPropertyDetails',
            component: UserPropertyDetails,
            props: true

        },
        {
            path: '/userConfirmationPayment/:out_trade_no',
            component: UserConfirmationPayment,
            props: true
        },
        {
            path:'/userMine',
            component: UserMine
        },
        {
            path:'/userRelease',
            component: UserRelease
        },
        {
            path:'/userInformation',
            component: UserInformation
        },
        {
            path: '/userOrders',
            component: UserOrders
        },
        {
            path: '/userOrdersDetail/:out_trade_no',
            component:userOrdersDetail,
            props: true
        },
        {
            path: '/userCollection',
            component:UserCollection
        },
        {
            path: '/userForget',
            component: UserForget
        },
        {
            path: '/rootIndex',
            name: 'rootIndex',
            component: rootIndex,
            children: [
                {
                    path: 'rootProperty',
                    component: RootProperty
                },
                {
                    path: 'rootPropertyDetail',
                    component:RootPropertyDetail
                },
                {
                    path: 'rootOrders',
                    component: RootOrders
                },
                {
                    path: 'rootOrdersDetail',
                    component: RootOrdersDetail
                },
                {
                    path: 'rootUsers',
                    component: RootUsers
                },
                {
                    path: 'rootUsersDetail',
                    component: RootUsersDetail
                }
            ]
        },
    ]
})

export default router