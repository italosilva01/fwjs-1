    <div id="container">
      <h1>Conteúdo</h1>
     
          <!-- <AbasFather abas={tabs.stateStore}   /> -->

        <button on:click={()=>console.log(tabs)}>Teste</button>
    </div>
  
  <script lang="ts">
    import {tabs} from "../../store/tab.store"
 //   import AbasFather from "../AbasFather.svelte";
    const aba = [
    { tab: "Tab1", content: "1111111111111111111111111111111111111" },
    { tab: "Tab2", content: "2222222222222222222222222222222222222" },
    { tab: "Tab3", content: "3333333333333333333333333333333333333" },
    { tab: "Tab4", content: "4444444444444444444444444444444444444" },
  ];
  
  </script>
  
  
  <style>
      #container {
          width: 487px;
          box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
          border-radius: 4px;
          padding: 24px;
          text-align: start;
      }
  </style>