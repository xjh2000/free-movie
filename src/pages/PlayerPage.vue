<script setup lang="ts">

import {ref, watchEffect} from "vue";
import CustomPlayerOption from "../components/CustomPlayerOption.vue";
import {PlayerStore} from "../store/PlayerStore";

const playerStore = PlayerStore();
const isPlaying = ref(false);
const origin = ref(playerStore.origin);


watchEffect(() => {
  playerStore.setOrigin(origin.value);
});

watchEffect(() => {
  isPlaying.value = playerStore.resolveUrl !== '';
});


</script>

<template>
  <div class="h-screen">
    <div class="h-1/2 m-2  bg-black" v-if="!isPlaying"/>
    <div class="h-1/2 m-2 flex items-center bg-black" v-if="isPlaying">
      <iframe title="player" class="w-full h-full" allowFullScreen :src="playerStore.resolveUrl"/>
    </div>

    <van-tabs v-model:active="origin">
      <van-tab title="默认" name="default">
        <p>暂未实现</p>
      </van-tab>
      <van-tab title="自定义" name="custom">
        <CustomPlayerOption/>
      </van-tab>
    </van-tabs>

  </div>
</template>


<style scoped>

</style>