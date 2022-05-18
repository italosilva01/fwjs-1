<div  class="aba" on:click={change}>
{name}</div>
<style>
.aba{
  width: 112px;
  height: 32px;
  background-color: #cccccc;
  border: 1px solid #77777777;
  text-align: center;
}


</style>

<script lang="ts">
    import {createEventDispatcher}from 'svelte'

    const dispatcher = createEventDispatcher();

    export let name:string="";
    export let position:number=0;

    function change(){

        dispatcher('chanceCurrentStep',position)
    }

</script>