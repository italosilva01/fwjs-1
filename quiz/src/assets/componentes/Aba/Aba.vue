<template>
  <div class="container-button" @click="btnClick(position)">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
export interface AbaProps {
  text: string;
  position: number;
}

defineProps<AbaProps>();

const emit = defineEmits(["change"]);

function btnClick(position: number) {
  console.log(position);
  emit("change", position);
}
</script>

<style scoped>
.container-button {
  width: 112px;
  height: 32px;

  background-color: #cccccc;
  text-align: center;
  border: 1px solid #77777777;
  transition: filter 0.2s;
}
.container-button:hover {
  filter: brightness(0.9);
}
</style>
