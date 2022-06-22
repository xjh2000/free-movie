<script setup lang="ts">

import {PlayerStore} from "../store/PlayerStore";
import {VideoListItem} from "../api";
import {ref} from "vue";

const playerStore = PlayerStore();
const episode = ref(null)

function player(item: VideoListItem) {
  playerStore.setCurrentResolveUrl(item.url as string);
  playerStore.currentEpisode = item.episode?.toString() as string;
}

</script>

<template>
  <div>
    <div class="p-2 overflow-auto h-40 flex flex-row flex-wrap  gap-2   ">
      <div class="flex-auto self-stretch w-20 " v-for="item in playerStore.videoUrlList">
        <button class="bg-blue-500  content-center w-full" @click="()=>{player(item)}">{{ item.episode }}</button>
      </div>
    </div>
    <div class="w-1/2">
      <p>当前播放集数: {{ playerStore.currentEpisode }}</p>
    </div>

  </div>
</template>


<style scoped>

</style>