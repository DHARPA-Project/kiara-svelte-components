<script lang="ts">
	export let code: string;
	import { highlightPythonCode } from '../../syntax-highlight.js';
	const displayCode = highlightPythonCode(code);
</script>

<pre>{@html displayCode}</pre>

<style lang="postcss">
	/* hex code from shiki's nord theme */
	pre {
		@apply bg-[#2e3440] text-sm p-6 rounded-md w-fit;
	}
</style>
