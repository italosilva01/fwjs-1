<script setup lang="ts">
import AbaFatherVue from "./assets/componentes/AbaFather/AbaFather.vue";

const abas = [
  { title: "Tab1", content: "1111111111111111111111111111111111111" },
  { title: "Tab2", content: "2222222222222222222222222222222222222" },
  { title: "Tab3", content: "3333333333333333333333333333333333333" },
  { title: "Tab4", content: "4444444444444444444444444444444444444" },
];
</script>

<template><AbaFatherVue :abas="abas" /></template>

<style>
@import "./assets/base.css";

#app {
  text-align: center;
}
</style>
