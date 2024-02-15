<script context="module">
	import ModuleConfig from './ModuleConfig.svelte';
	export const meta = {
		title: 'Display/ModuleConfig',
		component: ModuleConfig,
		tags: ['autodocs'],
		argTypes: {
			fields: {
				control: 'object',
				description: 'TODO',
				type: 'object'
			}
		},
		parameters: {
			docs: {
				description: {
					component:
						'This table is used to display the inputs or outputs of a **module**. You\'ll probably want to wrap this component in `<section class="prose">` to make it look good\n\n## Note on ordering\n\nWe display the rows of this table in order of how much the end user should care about the value in each row. Required values with no default come first, as the user must suppy something for that value. Next come required values with a default, as the user can optionally override this, and finally optional values without and with defaults, as the user is least likely to care about those. Within each grouping, fields are ordered alphabetically by name, to make it easier to skim the list of names.'
				}
			}
		}
	};
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
	const exampleModuleConfig = {
		constants: {
			description: 'Value constants for this module.',
			type: 'object',
			value_default: null,
			required: false
		},
		defaults: {
			description: 'Value defaults for this module.',
			type: 'object',
			value_default: null,
			required: false
		},
		query: {
			description:
				'The query to execute. If not specified, the user will be able to provide their own.',
			type: '-- n/a --',
			value_default: null,
			required: false
		},
		relation_name: {
			description:
				'The name the table is referred to in the sql query. If not specified, the user will be able to provide their own.',
			type: '-- n/a --',
			value_default: 'data',
			required: false
		},
		filter_name: {
			description: 'The name of the filter.',
			type: 'string',
			value_default: null,
			required: true
		}
	};
</script>

<Template let:args>
	<section class="prose">
		<ModuleConfig {...args} />
	</section>
</Template>
<Story name="Default" args={{ config_values: exampleModuleConfig }} />
