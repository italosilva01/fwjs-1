<script setup lang="ts">
import TabVue from "./assets/componentes/Tab/Tab.vue";
import seeTabsVue from "./assets/componentes/SeeTabs/SeeTabs.vue";
</script>

<template>
  <div id="main">
    <TabVue />
    <seeTabsVue/>
  </div>
</template>

<style>
@import "./assets/base.css";

#app {
  text-align: center;
}

#main{
  display: flex;
  justify-content: center;
  gap: 10px;
}


</style>
