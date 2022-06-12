import {RouteRecordRaw} from "vue-router";

export const userRouter: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../pages/UserPage.vue'),
        redirect: '/home',
        children: [
            {path: 'home', component: () => import('../pages/HomePage.vue')},
            {
                path: 'player', component: () => import('../pages/PlayerPage.vue')
            },
        ]
    },
]
