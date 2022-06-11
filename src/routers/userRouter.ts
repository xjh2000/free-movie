import {RouteRecordRaw} from "vue-router";

export const userRouter: RouteRecordRaw[] = [
    {path: '/', component: () => import('../pages/UserPage.vue'), meta: {auth: 'user'}},
]
