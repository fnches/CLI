<script lang="ts">
	import Button from './../lib/Button.svelte';
	import Status from '$lib/Status.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);
</script>

<Status />
<h1>Posts</h1>
<p>Showing {posts.length} posts.</p>
<div>
	<div>
		<Button />
	</div>
</div>

{#each posts as { slug, title }}
	<ul><li><a href="/posts/{slug}">{title}</a></li></ul>
{/each}
