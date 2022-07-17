<div class="container">
    <div>
      <label for="title">Título</label>
      <input name="title" type="text" bind:value={titleValue}  />
      
    </div>
    {#if !valid&&titleValue=='' }
    <div class="error">
      <p>É necessário informar o título da aba</p>
    </div>
  {/if}
    

    <div>
      <label for="content">Conteúdo</label>
      <textarea bind:value={contentValue} />
    </div>
    {#if !valid&&contentValue=='' }
      <div  class="error">
        <p>A necessário informar o conteúdo da aba.</p>
      </div>  
    {/if}
    
  </div>
  
  <script lang="ts">
    export let titleValue = ' ';
    export let contentValue= ' ';
    export let valid:boolean;
  </script>

  <style  >
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