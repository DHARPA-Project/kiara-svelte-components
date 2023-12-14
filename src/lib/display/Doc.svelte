<script lang="ts">
	import type { Documentation } from '$lib/kiara.js';
	import sanitizeHtml from 'sanitize-html';
	import { marked } from 'marked';

	export let doc: Documentation;
	/**
	 * Whether to show the full markdown documentation of the item, or just the summary
	 */
	export let verbose = true;

	marked.use({
		gfm: false
	});

	const emptyDocMarker = '-- n/a --';
</script>

{#if doc.description && doc.description !== emptyDocMarker}
	<p>{doc.description}</p>
{/if}

{#if verbose && doc.doc}
	{#await marked.parse(doc.doc) then html}
		{@html sanitizeHtml(html)}
	{/await}
{/if}
