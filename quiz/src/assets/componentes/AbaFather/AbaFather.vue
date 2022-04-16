<template>
  <div class="abas-father">
    <div class="aba">
      <Aba
        v-for="(item, index) in abas"
        :key="item.title"
        :text="item.title"
        :position="index"
      />
    </div>

    <div class="content">
      <h4>{{ abas[0].content }}</h4>
    </div>
  </div>
</template>

<style scoped>
.aba {
  display: flex;

  justify-content: space-between;
  width: 514px;
}
.abas-father {
  margin: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content {
  width: 514px;
  height: 130px;
  background-color: #f0f0f0;
  border: 1px solid #aaaaaa;
  padding: 26px;
  margin-top: 19px;
}
</style>

<script setup lang="ts">
import Aba from "../Aba/Aba.vue";
const abas = [
  { title: "Tab1", content: "1111111111111111111111111111111111111" },
  { title: "Tab2", content: "2222222222222222222222222222222222222" },
  { title: "Tab3", content: "3333333333333333333333333333333333333" },
  { title: "Tab4", content: "4444444444444444444444444444444444444" },
];
</script>
