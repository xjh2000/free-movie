<script setup lang="ts">

import router from "../routers/router";

function clickHandler() {
  router.push("/admin");
}

</script>

<template>
  <div>
    <button @click="clickHandler">goto admin</button>
    <p>this is user page</p>
  </div>
</template>


<style scoped>

</style>