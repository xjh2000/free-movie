<script setup lang="ts">


import {Ref, ref} from "vue";
import {QSearchApiApi, VideoShowDto} from "../api";
import {PlayerStore} from "../store/PlayerStore";
import router from "../routers/router";

// TODO 页面数据的持久化

const searchString = ref("");
const videoShows: Ref<VideoShowDto[]> = ref([]);
const playerStore = PlayerStore();
const qSearchApiApi = new QSearchApiApi();

async function onPlayer(item: VideoShowDto) {
  qSearchApiApi.apiQSearchListGet(item.url)
      .then((res) => {
            playerStore.videoUrlList = res.data;
            playerStore.videoUrl = item.url as string;
            playerStore.activeTab = "default";
            playerStore.setCurrentResolveUrl(item.url as string);
            router.push("/player");
          }
      )
}

function onSearch(val: string) {
  videoShows.value = [];
  qSearchApiApi.apiQSearchGet(val).then(
      (res) => {
        /**
         * TODO apiQSearch 返回的poster 需要手动添加http：
         * 后端为确保一致性 需要更改
         * */
        let t = res.data;
        t.poster = "http:" + t.poster;
        videoShows.value.push(t);
      }
  )
}


</script>

<template>
  <div class="h-screen">
    <van-sticky>
      <van-search v-model="searchString" @search="onSearch"/>
    </van-sticky>
    <!--TODO 将搜索来源体现出来-->
    <div class="h-full m-2 gap-6 grid  sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4  justify-items-stretch ">
      <div @click="()=>{onPlayer(item)}" class="hover:brightness-50  h-min flex flex-row" v-for="item in videoShows">
        <img class="rounded-l-md object-cover w-1/2 h-full" :src="item.poster" alt="海报"/>
        <div class="my-1 rounded-r-md p-6 grow space-y-2 text-textColor bg-cyan-800 ">
          <h1 class="text-xl font-extrabold">{{ item.title }}</h1>
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped>

</style>