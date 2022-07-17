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
        <form  on:submit|preventDefault={submitForm}>
         

            {#each teste as item,i }
             <CatchInfo titleValue={item.title} contentValue={item.content} valid={item.valid} index={i} />
           {/each}
         
          
         
          <div class="content">
          <button type="submit">Salvar</button>
          
        </div>
          </form>
        </div>
</div>

<script lang="ts">
import CatchInfo from "./CatchInfo/CatchInfo.svelte";
import {tabs} from '../../store/tab.store' 
  let teste = [];
  let value = 0;

  const getDatasForm =(formData: FormData)=>{
    const data = {};

    for (let field of formData){
      const [key,value] = field;

      
      data[key] = value;
    }

    return data;
  }

  const makeArray = (data:{}) =>{
    let array = []
    for (let index = 0; index< value; index++){
      let title =data[`title${index}`];
      let content =data[`content${index}`];  
      array[index] ={title,content}
         
      
    }

    return array
  }

  const submitForm =(e)=>{
    
    const formData = new FormData(e.target);
    const data = getDatasForm(formData);
    let error =false
    
     
      Object.keys(data).map((item)=>{
      if(data[item] ===''){
        const position = item.substring(item.length - 1);
        console.log(item)
        teste[position].valid = false;
        error = true
      }
    })
    
    if(!error){
      tabs.AddState( makeArray(data))

     
    }

  }

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