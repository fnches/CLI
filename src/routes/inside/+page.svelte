<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		const Pera = await import('/src/lib/pera.js');
		Pera.handleConnectWalletClick(event);
	});
</script>
