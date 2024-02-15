<script context="module">
	import InputsOutputs from './InputsOutputs.svelte';
	export const meta = {
		title: 'Display/InputsOutputs',
		component: InputsOutputs,
		tags: ['autodocs'],
		argTypes: {
			fields: {
				control: 'object',
				description:
					'An object `[k: string]: FieldInfo`, having at least field_name and field_schema values, as found in the `input_fields` or `output_fields` of an operation',
				type: 'object'
			}
		},
		parameters: {
			docs: {
				description: {
					component:
						'This table is used to display the inputs or outputs of an **operation**. You\'ll probably want to wrap this component in `<section class="prose">` to make it look good\n\n## Note on ordering\n\nWe display the rows of this table in order of how much the end user should care about the value in each row. Required values with no default come first, as the user must suppy something for that value. Next come required values with a default, as the user can optionally override this, and finally optional values without and with defaults, as the user is least likely to care about those. Within each grouping, fields are ordered alphabetically by name, to make it easier to skim the list of names.'
				}
			}
		}
	};
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
	const exampleFieldInfo = {
		table_name: {
			field_name: 'table_name',
			field_schema: {
				type: 'string',
				type_config: {},
				default: 'imported_table',
				optional: true,
				is_constant: false,
				doc: {
					description: 'The name of the table in the new database.',
					doc: null
				}
			},
			data_type_info: {
				data_type_name: 'string',
				data_type_config: {
					allowed_strings: null
				},
				characteristics: {
					is_scalar: true,
					is_json_serializable: true
				},
				data_type_class: {
					python_class_name: 'StringType',
					python_module_name: 'kiara.data_types.included_core_types',
					full_name: 'kiara.data_types.included_core_types.StringType'
				}
			},
			value_required: false
		},
		database: {
			field_name: 'database',
			field_schema: {
				type: 'database',
				type_config: {},
				default: null,
				optional: false,
				is_constant: false,
				doc: {
					description: "The result value (of type 'database').",
					doc: null
				}
			},
			value_required: true
		},
		relation_name: {
			field_name: 'relation_name',
			field_schema: {
				type: 'string',
				type_config: {},
				default: 'a_data',
				optional: false,
				is_constant: false,
				doc: {
					description: 'The name the table is referred to in the sql query.',
					doc: null
				}
			},
			value_required: false
		},
		other_relation_name: {
			field_name: 'other_relation_name',
			field_schema: {
				type: 'string',
				type_config: {},
				default: 'b_data',
				optional: false,
				is_constant: false,
				doc: {
					description: 'The name the table is referred to in the sql query.',
					doc: 'This one has a bunch more documentation, that should all be rendered. Not sure if that actually happends in the wild though.'
				}
			},
			value_required: false
		},
		table: {
			field_name: 'table',
			field_schema: {
				type: 'table',
				type_config: {},
				default: null,
				optional: false,
				is_constant: false,
				doc: {
					description: "The source value (of type 'table').",
					doc: null
				}
			},

			value_required: true
		}
	};
</script>

<Template let:args>
	<section class="prose">
		<InputsOutputs {...args} />
	</section>
</Template>
<Story name="Default" args={{ fields: exampleFieldInfo }} />
