import {RouteRecordRaw} from "vue-router";

export const adminRouter: RouteRecordRaw[] = [
    {path: '/admin', component: () => import('../pages/AdminPage.vue'), meta: {auth: 'admin'}},
]
