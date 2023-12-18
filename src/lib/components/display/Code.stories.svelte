<script context="module">
	import Code from './Code.svelte';
	export const meta = {
		title: 'Display/Code',
		component: Code,
		tags: ['autodocs'],
		argTypes: {
			code: { control: 'text', description: 'Python code to be highlighted', type: 'string' }
		},
		parameters: {
			docs: {
				description: {
					component:
						'This component uses Shiki to apply syntax highlighting to the provided Python code'
				}
			}
		}
	};
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';

	const code =
		'class DeserializeTableModule(DeserializeValueModule):\n\n    _module_type_name = "load.tables"\n\n    @classmethod\n    def retrieve_supported_target_profiles(cls) -> Mapping[str, Type]:\n        return {"python_object": KiaraTables}\n\n    @classmethod\n    def retrieve_serialized_value_type(cls) -> str:\n        return "tables"\n\n    @classmethod\n    def retrieve_supported_serialization_profile(cls) -> str:\n        return "feather"\n\n    def to__python_object(self, data: SerializedData, **config: Any):\n\n        import pyarrow as pa\n\n        tables: Dict[str, Any] = {}\n\n        for column_id in data.get_keys():\n\n            if TABLE_COLUMN_SPLIT_MARKER not in column_id:\n                raise KiaraException(\n                    f"Invalid serialized \'tables\' data, key must contain \'{TABLE_COLUMN_SPLIT_MARKER}\': {column_id}"\n                )\n            table_id, column_name = column_id.split(\n                TABLE_COLUMN_SPLIT_MARKER, maxsplit=1\n            )\n\n            chunks = data.get_serialized_data(column_id)\n\n            # TODO: support multiple chunks\n            assert chunks.get_number_of_chunks() == 1\n            files = list(chunks.get_chunks(as_files=True, symlink_ok=True))\n            assert len(files) == 1\n\n            file = files[0]\n            with pa.memory_map(file, "r") as column_chunk:\n                loaded_arrays: pa.Table = pa.ipc.open_file(column_chunk).read_all()\n                column = loaded_arrays.column(column_name)\n                tables.setdefault(table_id, {})[column_name] = column\n\n        table = KiaraTables.create_tables(tables)\n        return table\n';
</script>

<Template let:args>
	<Code {...args} />
</Template>
<Story name="Default" args={{ code: code }} />
