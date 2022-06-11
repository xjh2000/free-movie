<script setup lang="ts">
import router from "../routers/router";

function clickHandler() {
  router.push("/");
}

</script>

<template>
  <div>
    <button @click="clickHandler">goto user</button>
    <p>this is admin page</p>
  </div>
</template>


<style scoped>

</style>