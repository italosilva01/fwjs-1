<div class="abas-father">
    <div class="container">
        {#each  abas as item, i}
            <Aba name={item.tab} position={i} on:chanceCurrentStep={(e)=>chanceValue(e.detail)}/>
        {/each}
       
    </div>
    <div class="content">
      <h4>{abas[currentAba].content}</h4>
    </div>
  </div>

  <script lang="ts">
      import Aba from './Aba.svelte'
     export let abas:{tab:string,content:string}[] ;
  
     let currentAba = 0

  function chanceValue(position:number){

    currentAba = position
  }
  </script>

  <style>
.container {
  display: flex;

  justify-content: space-between;
  width: 514px;
}
.content {
  width: 514px;
  height: 130px;
  background-color: #f0f0f0;
  border: 1px solid #aaaaaa;
  padding: 26px;
  margin-top: 19px;
}
.abas-father {
  margin: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
  </style>