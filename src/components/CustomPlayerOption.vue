<script setup lang="ts">
import {ref} from "vue";
import {PlayerStore} from "../store/PlayerStore";

const playerStore = PlayerStore();

const defaultResolveOrigins = [
  {name: '纯净', url: 'https://z1.m1907.cn/?jx='},
  {name: 'parwix', url: 'https://vip.parwix.com:4433/player/?url='},
  {name: 'm3u8', url: 'https://jsap.attakids.com/?url='},
  {name: 'ok', url: 'https://okjx.cc/?url='},
];

defaultResolveOrigins.forEach(origin => {
  playerStore.addResolveOrigin(origin);
});

const showResolveOriginPicker = ref(false);
const showResolveOriginModify = ref(false);
const resolveOriginChange = (value: string) => {
  playerStore.currentOrigin = value;
  showResolveOriginPicker.value = false;
};


</script>

<template>
  <div class="h-full p-2">
    <div class="flex  flex-row">
      <div class="basis-8/12">
        <van-field
            v-model="playerStore.currentOrigin"
            is-link
            readonly
            label="解析路线"
            placeholder="选择解析路线"
            @click="showResolveOriginPicker = true"
        />
        <van-popup v-model:show="showResolveOriginPicker" round position="bottom">
          <van-picker
              :columns="playerStore.resolveName"
              @cancel="showResolveOriginPicker = false"
              @confirm="resolveOriginChange"
          />
        </van-popup>
      </div>
      <div class="basis-4/12">
        <van-button
            class="w-full"
            type="primary"
            size="small"
            @click="showResolveOriginModify = true"
        >
          自定义路线
        </van-button>
        <van-popup v-model:show="showResolveOriginModify" round position="bottom" :style="{ height: '50%' }"
        >
          <VanButton class="w-full" @click="playerStore.resolveOrigin.unshift({name:'',url:''})">添加</VanButton>
          <div class="p-3" v-for="item in playerStore.resolveOrigin">
            <div class="p-3 bg-black">
              <van-field
                  size="small"
                  v-model="item.name"
                  label="名称"
                  placeholder="解析路线名称"
              />
              <van-field
                  size="small"
                  v-model="item.url"
                  label="地址"
                  placeholder="解析路线地址"
              />
              <VanButton class="w-full"
                         @click="playerStore.resolveOrigin.splice(playerStore.resolveOrigin.indexOf(item),1)">删除
              </VanButton>
            </div>

          </div>

        </van-popup>
      </div>
    </div>

    <van-field v-model="playerStore.videoUrl" label="视频地址" placeholder="输入要解析的视频地址"/>
    <van-button class="w-full" type="primary" @click="playerStore.resolveUrl = playerStore.resolveOrigin.find((origin) =>{
      return origin.name === playerStore.currentOrigin;
    }).url + playerStore.videoUrl">解析</van-button>
  </div>

</template>

<style scoped>

</style>