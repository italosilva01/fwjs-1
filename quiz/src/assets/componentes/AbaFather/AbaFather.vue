<template>
  <div class="abas-father">
    <div class="aba">
      <Aba
        v-for="(item, index) in abas"
        :key="index"
        :tab="item.title"
        :position="index"
        @change="chanceCurrentAba"
      />
    </div>

    <div class="content">
      <h4>{{ abas[state].content }}</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Aba from "../Aba/Aba.vue";

export interface abaProp {
  title: string;
  content: string;
}
export interface AbaFatherProps {
  abas: abaProp[];
}

defineProps<AbaFatherProps>();

const state = ref(0);

const chanceCurrentAba = (position: number) => {
  state.value = position;
};
</script>

<style scoped>
.aba {
  display: flex;

  justify-content: space-between;
}
.abas-father {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content {
  height: 130px;
  background-color: #f0f0f0;
  border: 1px solid #aaaaaa;
  padding: 26px;
  margin-top: 19px;
}
</style>
