<template>
  <div class="abas-father">
    <div class="aba">
      <Aba
        v-for="(item, index) in abas"
        :key="item.title"
        :text="item.title"
        :position="index"
        @change="chanceCurrentAba"
      />
    </div>

    <div class="content">
      <h4>{{ abas[state.count].content }}</h4>
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
import { reactive, ref } from "vue";
import Aba from "../Aba/Aba.vue";

export interface AbaFatherProps {
  abas: {
    title: string;
    content: string;
  }[];
}

defineProps<AbaFatherProps>();

const state = reactive({ count: 0 });

const chanceCurrentAba = (position: number) => {
  state.count = position;
};
</script>
