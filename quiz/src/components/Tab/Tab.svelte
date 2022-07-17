<div id="container">
    <h1 class="title-component">Tab</h1>
    <div class="content">
        <div>
            <label>Núm.tabs</label>
            <input type="number" name="numTabs" bind:value={value} on:change={()=>{

              teste = [];

              for (let index = 0; index < value; index++){
                teste.push({title:'',content:'',valid:true});
               
              }
              teste = teste;
            }
            }/>
        </div>


    </div>
    <hr/>
    <div class="content" id="CatchVue">
        <form >
         

            {#each teste as item }
             <!-- content here -->
             <CatchInfo titleValue={item.title} contentValue={item.content} valid={item.valid} />
           {/each}
         
          
         
          <div class="content">
          <button type="submit">Salvar</button>
          
        </div>
          </form>
        </div>
</div>

<script lang="ts">
import CatchInfo from "./CatchInfo/CatchInfo.svelte";


  let teste = [];
  let value = 0;

</script>

<style>
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