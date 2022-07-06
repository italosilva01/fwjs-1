<template>
  <div id="container">
    <h1 class="title-component">Tab</h1>

    <div class="content">
      <div>
        <label for="numTabs">Núm.tabs</label>
        <input type="number" name="numTabs" v-model="qutInputs" />
      </div>
    </div>
    <hr />
    <div class="content" id="CatchVue">
    <form @submit.prevent="submit">
      <CatchInfoVue
        v-for="(item,i) in localState.value"
        :key="i"
        :title="item.title"
        :content="item.content"        
        v-on:save-data="saveData($event,i)"
        :position="i"
      />
      <div class="content">
      <button type="submit">Salvar</button>
      
    </div>
      </form>
    </div>
    
  </div>
</template>

<script setup lang="ts">

import CatchInfoVue from "./CatchInfo/CatchInfo.vue";

import { stateStore, type StateType, } from "@/assets/store/tab.store";
import { reactive, ref, watch } from "vue";

const qutInputs = ref(0)

const localState=reactive({value:[] as StateType[]})

const submit =()=>{
  stateStore.addState(localState.value)
};


const saveData = (val:StateType,i:number)=>{
  localState.value[i] = val;

}


  
watch(stateStore,()=>{
  console.log(stateStore);
})



watch(qutInputs, (qutInputs) => {
  let NewArray: StateType[] = [];

  for (let index = 0; index < qutInputs; index++) {
    NewArray.push({title:'',content:''});
  }
  localState.value=NewArray;
});


  


</script>

<style scoped>
#container {
  width: 550px;
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
#CatchVue {
  flex-direction: column;
  gap: 20px;
}
.title-component {
  font-size: 30px;
  font-family: "Inter";
  font-weight: 500;
  line-height: 28px;
  color: #424242;
}

.content {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 5px;

  display: flex;
  justify-content: end;
}

.content button {
  width: 69px;
  height: 36px;

/* Primary/Main */

background: #7B61FF;
border-radius: 4px;
color: #ffffff;
border: none;
}
.content input {
  width: 400px;
  background: #FFFFFF;
/* gray_2/40 */

border: 1px solid #E0E0E0;
border-radius: 4px;
}
.content > div {
  display: flex;
  gap: 10px;
}
</style>
