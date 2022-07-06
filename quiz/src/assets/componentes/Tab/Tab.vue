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
        v-for="(item,i) in stateStore.state"
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

const localState:StateType[]=reactive([] as StateType[])

const submit =()=>{
  stateStore.addState(localState)
};


const saveData = (val:StateType,i:number)=>{
  localState[i] = val;

}


  
watch(stateStore,()=>{
  console.log(stateStore);
})



watch(qutInputs, (qutInputs) => {
  let NewArray: StateType[] = [];

  for (let index = 0; index < qutInputs; index++) {
    NewArray.push({title:'',content:''});
  }
  stateStore.addState(NewArray);
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

  display: flex;
  justify-content: end;
}

.content button {
  filter: brightness(0.8);
}
.content input {
  width: 400px;
}
.content > div {
  display: flex;
  gap: 10px;
}
</style>
