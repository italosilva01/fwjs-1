<template>
  <div class="container">
    <div>
      <label for="title">Título</label>
      <input name="title" type="text" />
    </div>
    <div>
      <label for="content">Conteúdo</label>
      <UTextArea name="{nameTextArea}" />
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
