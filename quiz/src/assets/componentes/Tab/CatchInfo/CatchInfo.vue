<template>
  <div class="container">
    <div>
      <label for="title">Título</label>
      <input name="title" type="text" v-model="title" @change="chanceValueTitle(title,position)"  />
      
    </div>
    <div v-if="validValue == false && titleValue =='' " class="error">
      <p>É necessário informar o título da aba</p>
    </div>

    <div>
      <label for="content">Conteúdo</label>
      <textarea name="{nameTextArea}" v-model="content" @change="chanceValueContent(content,position)" />
    </div>
    <div v-if="validValue == false && contentValue =='' " class="error">
      <p>A necessário informar o conteúdo da aba.</p>
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

.error{

  color: red;

  display: flex;
  justify-content: start;

}
.error p{
  text-align: start;
  margin-right: auto;
  margin-left: auto;

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
import { ref, toRefs, watch } from 'vue';

 interface StateProp {
  title: string;
  content: string;
  position:number;
  valid:boolean;
  
}
interface StateEmit {
 (e:"saveData", val:{title:string,content:string,valid:boolean},i:number):void
}

const props = defineProps<StateProp>();
const emit = defineEmits<StateEmit>();
const { valid } = toRefs(props)

const titleValue = ref('');
const contentValue = ref('');
const validValue = ref(valid)


const chanceValueTitle = (val:string,i:number)=>{
  titleValue.value = val
  
  emit('saveData',{title:titleValue.value,content:contentValue.value,valid:validValue.value},i)
}

const chanceValueContent = (val:string,i:number)=>{
  contentValue.value = val
  emit('saveData',{title:titleValue.value,content:contentValue.value,valid:validValue.value},i)

}



</script>
