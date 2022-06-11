import {defineStore} from "pinia";

type UserStoreState = {
    auth: string[];
}

let localUser: UserStoreState = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : {};


export const UserStore = defineStore(
    'user',
    {
        state: () => {
            return localUser;
        },
        actions: {
            setAuth(auth: string[]) {
                this.auth = auth;
            }
        }
    }
);

export function localStorageOfUserStore() {
    let userStore = UserStore();
    userStore.$subscribe((mutation, state) => {
        localStorage.setItem('user', JSON.stringify(state));
    })
}