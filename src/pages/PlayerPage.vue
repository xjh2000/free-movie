<script setup lang="ts">

import {ref, watchEffect} from "vue";
import CustomPlayerOption from "../components/CustomPlayerOption.vue";
import {PlayerStore} from "../store/PlayerStore";

const playerStore = PlayerStore();
const isPlaying = ref(false);
const showHistoryUrlPicker = ref(false)

function HistoryUrlPicker(value: string) {
  playerStore.setCurrentResolveUrl(value);
  showHistoryUrlPicker.value = false;
}

watchEffect(() => {
  isPlaying.value = playerStore.currentResolveUrl !== '';
});


</script>

<template>
  <div class="h-screen">
    <div class="h-1/2 m-2  bg-black" v-if="!isPlaying"/>
    <div class="h-1/2 m-2 flex items-center bg-black" v-if="isPlaying">
      <iframe title="player" class="w-full h-full" allowFullScreen :src="playerStore.currentResolveUrl"/>
    </div>

    <van-tabs v-model:active="playerStore.activeTab">
      <van-tab title="默认" name="default">
        <p>暂未实现</p>
      </van-tab>
      <van-tab title="自定义" name="custom">
        <CustomPlayerOption/>
      </van-tab>
    </van-tabs>
    <div class="fixed right-5 bottom-14 ">
      <VanButton type="primary" @click="showHistoryUrlPicker = true" round icon="revoke"/>
    </div>
    <van-popup v-model:show="showHistoryUrlPicker" round position="bottom">
      <van-picker
          :columns="playerStore.history"
          @cancel="showHistoryUrlPicker = false"
          @confirm="HistoryUrlPicker"
      />
    </van-popup>
  </div>
</template>


<style scoped>

</style>