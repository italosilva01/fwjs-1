<script lang="ts">

	import AbaFather from './components/AbasFather.svelte'
import Tab from './components/Tab/Tab.svelte';
	const aba = [
    { tab: "Tab1", content: "1111111111111111111111111111111111111" },
    { tab: "Tab2", content: "2222222222222222222222222222222222222" },
    { tab: "Tab3", content: "3333333333333333333333333333333333333" },
    { tab: "Tab4", content: "4444444444444444444444444444444444444" },
  ];

</script>

<main>
	<Tab/>
</main>

<style>
	main {
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}
</style>