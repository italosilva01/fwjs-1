<template>
  <div class="container-button" @click="btnClick(position)">{{ tab }}</div>
</template>

<script setup lang="ts">
export interface AbaProps {
  tab: string;
  position: number;
}

defineProps<AbaProps>();

const emit = defineEmits(["change"]);

function btnClick(position: number): void {
  emit("change", position);
}
</script>

<style scoped>
.container-button {
  width: 112px;
  height: 32px;

  text-align: center;
  transition: filter 0.2s;

 background: #FFFFFF;

  

}
.container-button:hover {
  filter: brightness(0.8);
}
</style>
