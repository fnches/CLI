<script type="module">
	import { onMount } from 'svelte';
	import { PeraWalletConnect } from '@perawallet/connect';

	const peraWallet = new PeraWalletConnect();

	let accountAddress = '';

	function handleConnectWalletClick() {
		peraWallet
			.connect()
			.then((newAccounts) => {
				// Setup the disconnect event listener
				peraWallet.connector.on('disconnect', handleDisconnectWalletClick);
				setAccountAddress(newAccounts[0]);
			})
			.catch((error) => {
				if (error.data && error.data.type !== 'CONNECT_MODAL_CLOSED') {
					console.log(error);
				}
			});
	}

	function setAccountAddress(address) {
		accountAddress = address;
	}
</script>

<main>
	Pera Connect with Svelte

	<button on:click={handleConnectWalletClick}>
		{!!accountAddress ? 'Disconnect' : 'Connect to Pera Wallet'}
	</button>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
