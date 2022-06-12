import {defineStore} from "pinia";

type PlayerStoreState = {
    origin: string;
    resolveUrl: string;
    resolveOrigin:
        {
            name: string,
            url: string
        }[]
    currentOrigin: string;
    videoUrl: string;
}

const defaultState: PlayerStoreState = {
    origin: '',
    resolveUrl: '',
    resolveOrigin: [],
    currentOrigin: '',
    videoUrl: ''
}

const StoreId = 'player';

let local: PlayerStoreState = JSON.parse(localStorage.getItem(StoreId) as string);


export const PlayerStore = defineStore(
    StoreId,
    {
        state: () => {
            return {...defaultState, ...local}
        },
        getters: {
            resolveName(state) {
                return state.resolveOrigin.map(item => item.name);
            },
        },
        actions: {
            setOrigin(origin: string) {
                this.origin = origin;
            },
            addResolveOrigin(resolveOrigin: { name: string, url: string }) {
                let index = this.resolveOrigin.findIndex(item => item.name === resolveOrigin.name);
                if (index === -1) {
                    this.resolveOrigin.push(resolveOrigin);
                } else {
                    this.resolveOrigin[index] = resolveOrigin;
                }
            }
        }
    }
);

