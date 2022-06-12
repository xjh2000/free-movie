<script setup lang="ts">

import {UserStore} from "../store/UserStore";
import {Ref, ref} from "vue";
import {ConfigProviderProps} from 'vant';

const themeVars: Ref<ConfigProviderProps["themeVars"]> = ref({
  TabbarBackgroundColor: '#2c022f',
  TabbarItemActiveBackgroundColor: "#2c022f",
});

let userStore = UserStore();

function storeHandler() {
  userStore.setAuth(["admin"]);
}


</script>

<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view/>
    <div class="fixed left-0 right-0 bottom-0">
      <van-tabbar route>
        <van-tabbar-item to="/home" icon="home-o">
          首页
        </van-tabbar-item>
        <van-tabbar-item to="/player" icon="play-circle-o">
          播放器
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </van-config-provider>
</template>


