<template>
  <div class="abas-father" v-if="abas!=[]">
    <div class="aba" >
      <Aba
        v-for="(item, index) in abas"
        :key="index"
        :tab="item.title"
        :position="index"
        @change="chanceCurrentAba"
        :class="state == index&&'active'"
      />
    </div>

    <div class="content" v-if="abas!=[]">
      <h4 >{{ abas[state].content }}</h4>
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
  justify-content: start;
  gap: 5px;
}
.active {
  box-shadow: inset 0px -3px 0px #5A3FE0;

}
.abas-father {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content {
  height: 130px;
 
  padding: 26px;
  margin-top: 19px;
}
</style>
