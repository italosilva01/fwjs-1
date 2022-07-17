<div  class="container-button" on:click={change}>
{name}</div>
<style >
  .container-button {
    width: 112px;
    height: 32px;
    text-align: center;
    transition: filter 0.2s;
   background: #FFFFFF;
    
  }
  .container-button:hover {
    filter: brightness(0.8);
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
