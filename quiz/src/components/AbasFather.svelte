<div class="abas-father">
    <div class="container">
        {#each  abas as item, i}
            <Aba name={item.title} position={i} on:chanceCurrentStep={(e)=>chanceValue(e.detail)}/>
        {/each}
       
    </div>
    <div class="content">
      <h4>{abas[currentAba].content}</h4>
    </div>
  </div>

  <script lang="ts">
      import Aba from './Aba.svelte'
     const abas = [
    { title: "Tab1", content: "1111111111111111111111111111111111111" },
    { title: "Tab2", content: "2222222222222222222222222222222222222" },
    { title: "Tab3", content: "3333333333333333333333333333333333333" },
    { title: "Tab4", content: "4444444444444444444444444444444444444" },
  ];

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