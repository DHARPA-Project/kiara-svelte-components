<script lang="ts">
	import { Doc } from '$lib/index.js';
	import type { ConfigurationOptions } from '$lib/kiara.js';
	export let data: ConfigurationOptions[];
	const sortedData = data
		.sort((a, b) => a.name.localeCompare(b.name))
		.sort((a, b) => {
			// put no-default things first
			if (a.default != null && b.default == null) return 1;
			// don't change order if both have or both don't have a default value
			if (a.default == null && b.default == null) return 0;
			if (a.default != null && b.default != null) return 0;
			// put things with defaults last
			if (a.default == null && b.default !== null) return -1;
			return 0;
		})
		// put non-optional things first
		.sort((a, b) => (a.required !== b.required ? (a.required ? -1 : 1) : 0));
</script>

<table class="table-auto">
	<thead>
		<tr>
			<th scope="col">Name</th>
			<th scope="col">Description</th>
			<th scope="col">Type</th>
			<th scope="col">Required?</th>
			<th scope="col">Default</th>
		</tr>
	</thead>
	<tbody>
		{#each sortedData as row}
			<tr>
				<td>{row.name}</td>
				{#if row.doc !== undefined}
					<td>
						<Doc doc={row.doc} />
					</td>
				{/if}
				<td>{row.type}</td>
				<td>{row.required}</td>
				<td class="whitespace-nowrap"><code>{JSON.stringify(row.default)}</code></td>
			</tr>
		{/each}
	</tbody>
</table>
