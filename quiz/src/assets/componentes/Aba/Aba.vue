<template>
  <div class="container-button">{{ text }}</div>
</template>

<script setup lang="ts">
export interface AbaProps {
  text: string;
  position: number;
}

defineProps<AbaProps>();
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
