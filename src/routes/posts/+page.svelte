<script lang="ts">
    	// @ts-nocheck
	console.log('Postman Pat, nnnnnnyeeaww...');

	import { onDestroy, onMount } from 'svelte';

	onMount(() => console.log('Mounted posts page'));
	onDestroy(() => console.log('Unmounted posts page'));

</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>

		<li><a href="/posts">Posts</a></li>
	</ul>
</nav>

<h1>Posts</h1>
