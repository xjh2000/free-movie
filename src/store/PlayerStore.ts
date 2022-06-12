import {defineStore} from "pinia";

type PlayerStoreState = {
    activeTab: string;
    currentResolveUrl: string;
    resolveOrigins:
        {
            name: string,
            url: string
        }[]
    currentOrigin: string;
    videoUrl: string;
    historyUrls: string[];
}

const defaultState: PlayerStoreState = {
    historyUrls: [],
    activeTab: '',
    currentResolveUrl: '',
    resolveOrigins: [],
    currentOrigin: '',
    videoUrl: ''
}
const historyUrlSize = 30;
const StoreId = 'player';

let local: PlayerStoreState = JSON.parse(localStorage.getItem(StoreId) as string);


export const PlayerStore = defineStore(
    StoreId,
    {
        state: () => {
            return {...defaultState, ...local}
        },
        getters: {
            resolveName(state: PlayerStoreState) {
                return state.resolveOrigins.map(item => item.name);
            },
            currentResolveOrigin(state: PlayerStoreState) {
                return state.resolveOrigins.find(item => item.name === state.currentOrigin);
            }
        },
        actions: {

            addResolveOrigin(resolveOrigin: { name: string, url: string }) {
                let index = this.resolveOrigins.findIndex(item => item.name === resolveOrigin.name);
                if (index === -1) {
                    this.resolveOrigins.push(resolveOrigin);
                } else {
                    this.resolveOrigins[index] = resolveOrigin;
                }
            },
            /***
             *  设置当前播放视频的解析地址,并且把视频的url存入历史记录
             * @param url 解析前的视频地址源地址
             */
            setCurrentResolveUrl(url: string) {
                let indexOf = this.historyUrls.indexOf(url);
                // 如果历史记录中没有该视频地址,则添加到历史记录中
                if (indexOf === -1) {
                    if (this.historyUrls.length > historyUrlSize) {
                        this.historyUrls.pop();
                    }
                    this.historyUrls.unshift(url);
                } else {
                    // 如果历史记录中有该视频地址,则把该视频地址放到第一个位置
                    this.historyUrls.splice(indexOf, 1);
                    this.historyUrls.unshift(url);
                }

                let resolveUrl = '';
                let currentResolveOrigin = this.resolveOrigins.find((item) => {
                    return item.name === this.currentOrigin;
                });
                // 处理当前解析地址不存在的情况
                if (currentResolveOrigin) {
                    resolveUrl = currentResolveOrigin.url;
                } else {
                    resolveUrl = this.resolveOrigins[0].url;
                }
                // 设置当前播放地址
                this.videoUrl = url;
                this.currentResolveUrl = resolveUrl + url;
            }
        }
    }
);

