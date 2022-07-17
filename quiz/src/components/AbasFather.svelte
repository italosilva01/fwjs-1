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

<style >
  .aba {
    display: flex;
    justify-content: start;
    gap: 5px;
  }
  .container{
    display: flex;
  }
  .active {
    box-shadow: inset 0px -3px 0px #5A3FE0;
  }
  .abas-father {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .content {
    height: 130px;
   
    padding: 26px;
    margin-top: 19px;
  }
  </style>