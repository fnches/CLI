<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);
</script>

<div>
	<h1>Pera Connect example for <a href="https://kit.svelte.dev">SvelteKit</a></h1>
	<h2>
		<a href="/inside">Come See</a>
	</h2>
</div>
<div>
<h1>Posts</h1>
<p>Showing {posts.length} posts.</p>

{#each posts as { slug, title }}
	<ul><li><a href="/posts/{slug}">{title}</a></li></ul>
{/each}
</div>