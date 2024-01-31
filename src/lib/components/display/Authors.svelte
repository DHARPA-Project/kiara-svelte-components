<script lang="ts">
	import type { Author } from '$lib/kiara.js';
	import { stringifyAuthorNames } from '$lib/util.js';

	export let authors: Author[] | undefined;

	const authorStr = authors ? stringifyAuthorNames(authors)?.join(', ') : null;
</script>

{#if authorStr}
	<h2 class="mt-6">Author(s)</h2>
	<p>{authorStr}</p>
{/if}
