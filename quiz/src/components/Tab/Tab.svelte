<div id="container">
    <h1 class="title-component">Tab</h1>
    <div class="content">
        <div>
            <label>Núm.tabs</label>
            <input type="number" name="numTabs">
        </div>


    </div>
    <hr/>
    <div class="content" id="CatchVue">
        <form >
          <!-- <CatchInfoVue
            v-for="(item,i) in localState.value"
            :key="i"
            :title="item.title"
            :content="item.content"   
            :valid="item.valid"     
            v-on:save-data="saveData($event,i)"
            :position="i"
          /> -->
          <div class="content">
          <button type="submit">Salvar</button>
          
        </div>
          </form>
        </div>
</div>

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