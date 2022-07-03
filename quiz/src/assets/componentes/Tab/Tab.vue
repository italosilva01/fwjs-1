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
    <form @submit="submit">
      <CatchInfoVue
        v-for="(item,i) in state"
        :key="i"
        :set="v = $v.state.$each"
        :title="item.title"
        :content="item.content"
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
import { computed, ref, watch } from "vue";
import { required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export interface StateProp {
  title: string;
  content: string;
}
interface TabProps {
  state: StateProp[];
}

defineProps<TabProps>();

const state = ref([] as StateProp[]);
const qutInputs = ref(0);

const chanceValue = (newState: StateProp[]) => {
  state.value = newState;
};
watch(state, (state) => {
  console.log(state);
});

watch(qutInputs, (qutInputs) => {
  let NewArray: StateProp[] = [];

  for (let index = 0; index < qutInputs; index++) {
    NewArray.push({title:'',content:''});
  }
  console.log(NewArray);
  chanceValue(NewArray);
});


const rules = computed(()=>({
  state:{
    $each:{
      title:{required},
      content:{required}
    }

  }
})) 

const $v = useVuelidate(rules,{state});

const submit =(data:any)=>{
  data.preventDefault();

  console.log(data)

      console.log(this?.$v.$touch())


};
  
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
