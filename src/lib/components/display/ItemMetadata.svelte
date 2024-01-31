<script lang="ts">
	import type { Context, PythonClass, Author } from '$lib/kiara.js';
	import { stringifyAuthorNames } from '$lib/util.js';
	type ItemMetadata = {
		authors: { authors: Author[] };
		context?: Context;
		operation_types?: string[];
		python_class?: PythonClass;
	};
	export let item: ItemMetadata;
</script>

<table>
	<tbody>
		<tr>
			<td> Author(s) </td>
			<td>
				{#each item.authors.authors as author}
					<span data-pagefind-filter="author">
						{stringifyAuthorNames([author])}{' '}
					</span>
				{/each}
			</td>
		</tr>
		{#if item.context?.tags?.length}
			<tr>
				<td>Tags</td>
				<td>
					{#each item.context.tags as tag}
						<span data-pagefind-filter="tags">
							{tag}{' '}
						</span>
					{/each}
				</td>
			</tr>
		{/if}
		{#if item.operation_types?.length}
			<tr>
				<td>Operation type</td>
				<td data-pagefind-filter="operation type">
					{item.operation_types.join(', ')}
				</td>
			</tr>
		{/if}
		{#if item.python_class}
			<tr>
				<td>Python class</td>
				<td>
					<code>{item.python_class.full_name}</code>
				</td>
			</tr>
		{/if}
	</tbody>
</table>
