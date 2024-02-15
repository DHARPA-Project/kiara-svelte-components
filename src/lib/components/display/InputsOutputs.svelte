<script lang="ts">
	import type { FieldInfo, ConfigurationOptions } from '$lib/kiara.js';
	import ConfigurationTable from '../base/ConfigurationTable.svelte';
	export let fields: { [k: string]: FieldInfo };
	const dataOnly = Object.values(fields)
		// flatten object, include name and link to data_type
		.map((v) => ({
			...v.field_schema,
			name: v.field_name,
			required: !v.field_schema.optional
		})) as ConfigurationOptions[];
</script>

<ConfigurationTable data={dataOnly} />
