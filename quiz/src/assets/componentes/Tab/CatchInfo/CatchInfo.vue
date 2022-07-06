<template>
  <div class="container">
    <div>
      <label for="title">Título</label>
      <input name="title" type="text" v-model="title" @change="chanceValueTitle(title,position)"  />
    </div>
    <div>
      <label for="content">Conteúdo</label>
      <textarea name="{nameTextArea}" v-model="content" @change="chanceValueContent(content,position)" />
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

  background: #FFFFFF;
/* gray_2/40 */

border: 1px solid #E0E0E0;
border-radius: 4px;
}
</style>

<script setup lang="ts">
import type { StateType } from '@/assets/store/tab.store';
import { ref, watch } from 'vue';

 interface StateProp {
  title: string;
  content: string;
  position:number;
  
}
interface StateEmit {
 (e:"saveData", val:StateType,i:number):void
}

defineProps<StateProp>();
const emit = defineEmits<StateEmit>();

const titleValue = ref('');
const contentValue = ref('');


const chanceValueTitle = (val:string,i:number)=>{
  titleValue.value = val
  
  emit('saveData',{title:titleValue.value,content:contentValue.value,},i)
}

const chanceValueContent = (val:string,i:number)=>{
  contentValue.value = val
  emit('saveData',{title:titleValue.value,content:contentValue.value,},i)

}



</script>
