<template>
  <div id="container">
    <h1 class="title-component">Tab</h1>

    <div class="content">
      <div>
        <label for="numTabs">Núm.tabs</label>
        <input type="number" name="numTabs" />
      </div>
    </div>
    <hr />
    <CatchInfoVue />
  </div>
</template>

<script setup lang="ts">
import CatchInfoVue from "./CatchInfo/CatchInfo.vue";
j;
</script>

<style scoped>
#container {
  width: 550px;
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
.title-component {
  font-size: 30px;
  font-family: "Inter";
  font-weight: 500;
  line-height: 28px;
  color: #424242;
}

.content {
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: end;
}

.content button {
  filter: brightness(0.8);
}
.content input {
  width: 400px;
}
.content > div {
  display: flex;
  gap: 10px;
}
</style>
