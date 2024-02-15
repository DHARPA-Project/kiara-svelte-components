<script lang="ts">
	import type { ModuleConfigValues, ConfigurationOptions } from '$lib/kiara.js';
	import ConfigurationTable from '../base/ConfigurationTable.svelte';
	export let config_values: ModuleConfigValues;

	const data = Object.entries(config_values).map(([k, v]) => {
		return {
			// TODO handle complex types when available
			type: v.type == '-- n/a --' ? 'Something complex' : v.type,
			default: v.value_default,
			doc: { description: v.description },
			required: v.required,
			name: k
		};
	}) as ConfigurationOptions[];
</script>

<ConfigurationTable {data} />
