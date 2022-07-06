<template>
  <div id="container">
    <h1>TesteAAA</h1>
        <AbaFatherVue :abas="stateStore.state"  />
  </div>
  </template>

<script setup lang="ts">
import AbaFatherVue from '../AbaFather/AbaFather.vue';
import { stateStore } from '../../store/tab.store';
</script>


<style>
    #container {
        width: 487px;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        padding: 24px;

        text-align: start;

    }
</style>