<script setup lang="ts">

import {AuthApiFp, Configuration, UserApi} from "../api";
import axios from "axios";

function test1() {
  let userApi = new UserApi();
  userApi.userGetCurrentUserGet().then(response => {
    console.log(response);
  });
}

async function test() {
  let configuration = new Configuration();
  configuration.username = "xjh2000";
  configuration.password = "666666";
  configuration.baseOptions = {
    headers: {
      "Authorization": "Basic " + btoa(configuration.username + ":" + configuration.password)
    }
  };
  let newVar = AuthApiFp(configuration)
      .authTokenPost();

  let axiosResponse = await newVar();
  axios.defaults.headers.common["Authorization"] = "Bearer " + axiosResponse.data;
  console.log(axiosResponse);

}</script>

<template>
  <div>
    <p>this is home page</p>
    <button @click="test">get token</button>
    <br/>
    <button @click="test1">test1</button>
  </div>
</template>


<style scoped>

</style>