<script setup lang="ts">

import router from "../routers/router";
import {UserStore} from "../store/UserStore";

function clickHandler() {
  router.push("/admin");
}

let userStore = UserStore();

function storeHandler() {
  userStore.setAuth(["admin"]);
}


</script>

<template>
  <div>
    <button @click="clickHandler">goto admin</button>
    <button @click="storeHandler">test Store local</button>
    <p>this is user page</p>
  </div>
</template>


<style scoped>

</style>