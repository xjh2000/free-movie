import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import {userRouter} from "./userRouter";
import {adminRouter} from "./adminRouter";
import {UserStore} from "../store/UserStore";

let routerRecords: RouteRecordRaw[] = [...userRouter, ...adminRouter];
let router = createRouter(
    {
        history: createWebHashHistory(),
        routes: routerRecords,
    }
)

router.beforeEach((to, from, next) => {
    let userStore = UserStore();
    if (to.matched.some(record => record.meta.auth)) {
        if (userStore.auth.includes(to.meta.auth as string)) {
            next();
            return;
        } else {
            alert('你没有权限访问该页面');
            return;
        }
    }
    next();
});

export default router;