<div class="posts">
	<aside />
	<main>
		<slot />
	</main>
</div>

<style>
	.posts {
		display: grid;
		gap: 2rem;
		grid-template-columns: 200px 60ch;
		margin-top: 2rem;
	}
</style>
