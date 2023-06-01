<script lang="ts">
	import Library from '$lib/Library.svelte';
	import Pera from '$lib/Pera.svelte';
	import Status from '$lib/Status.svelte';

	let accountAddressLoose = '';
	export let accountAddressLooseCheck = '';

	function handleAccountAddressSet(event) {
		accountAddressLooseCheck = event.detail;
	}
</script>

<aside>
	<div class="pera">
		<Pera bind:accountAddressLoose on:accountAddressSet={handleAccountAddressSet}><Library /></Pera>
	</div>
</aside>

<h2>{accountAddressLoose} ee</h2>
<h2>{accountAddressLooseCheck} aa</h2>

<slot />

<style>
	.pera {
		width: 70%;
		float: right;
	}
</style>
