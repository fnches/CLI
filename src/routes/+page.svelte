<script lang="ts">
	import Status from '$lib/Status.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);
</script>

<Status />
<h1>Posts</h1>
<p>Showing {posts.length} posts.</p>

{#each posts as { slug, title }}
	<ul><li><a href="/posts/{slug}">{title}</a></li></ul>
{/each}
