<template>
  <div class="container">
    <div>
      <label for="title">Título</label>
      <input name="title" type="text" v-model="title" />
    </div>
    <div>
      <label for="content">Conteúdo</label>
      <textarea name="{nameTextArea}" v-model="content" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.container div {
  display: flex;
  justify-content: end;
  gap: 5px;
}

input,
textarea {
  width: 400px;
}
</style>

<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { ref } from "vue";

export interface StateProp {
  title: string;
  content: string;
}
defineProps<StateProp>();

</script>
