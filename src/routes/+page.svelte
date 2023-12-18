<script>
	import GitHubLink from '$lib/components/display/GitHubLink.svelte';
	import Doc from '$lib/components/display/Doc.svelte';
	import Code from '$lib/components/display/Code.svelte';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<GitHubLink
	href="https://github.com/DHARPA-project/kiara-svelte-components"
	classes="text-purple-500 fill-purple-500"
/>

<section class="prose">
	<Doc doc={{ description: 'test', doc: '# Some markdown\n\n[link](https://github.com)' }} />
</section>

<Code code="n = 'meown'.strip()" />
