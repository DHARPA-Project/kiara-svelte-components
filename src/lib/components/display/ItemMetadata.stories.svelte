<script context="module">
	import ItemMetadata from './ItemMetadata.svelte';
	export const meta = {
		title: 'Display/ItemMetadata',
		component: ItemMetadata,
		tags: ['autodocs'],
		argTypes: {
			item: {
				control: 'object',
				type: 'object'
			}
		}
	};
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
	const exampleDataTypeMetadata = {
		type_name: 'array',
		authors: {
			authors: [
				{
					name: 'Markus Binsteiner',
					email: 'markus@frkl.io'
				}
			]
		},
		context: {
			references: {
				source_repo: {
					url: 'https://github.com/DHARPA-Project/kiara_plugin.tabular',
					desc: 'The module package git repository.'
				},
				documentation: {
					url: 'https://DHARPA-Project.github.io/kiara_plugin.tabular/',
					desc: 'The url for the module package documentation.'
				}
			},
			tags: ['tabular'],
			labels: {
				package: 'kiara_plugin.tabular'
			}
		},
		python_class: {
			python_class_name: 'ArrayType',
			python_module_name: 'kiara_plugin.tabular.data_types.array',
			full_name: 'kiara_plugin.tabular.data_types.array.ArrayType'
		}
	};

	const exampleOperationMetadata = {
		type_name: 'assemble.tables',
		authors: {
			authors: [
				{
					name: 'Markus Binsteiner',
					email: 'markus@frkl.io'
				}
			]
		},
		context: {
			tags: ['tabular'],
			labels: {
				package: 'kiara_plugin.tabular'
			}
		},
		operation_types: ['custom_module']
	};

	const exampleModuleMetadata = {
		type_name: 'table.filters',
		documentation: {
			description: '-- n/a --',
			doc: null
		},
		authors: {
			authors: [
				{
					name: 'Markus Binsteiner',
					email: 'markus@frkl.io'
				}
			]
		},
		context: {
			references: {
				source_repo: {
					url: 'https://github.com/DHARPA-Project/kiara_plugin.tabular',
					desc: 'The module package git repository.'
				},
				documentation: {
					url: 'https://DHARPA-Project.github.io/kiara_plugin.tabular/',
					desc: 'The url for the module package documentation.'
				}
			},
			tags: ['tabular'],
			labels: {
				package: 'kiara_plugin.tabular'
			}
		},
		python_class: {
			python_class_name: 'TableFiltersModule',
			python_module_name: 'kiara_plugin.tabular.modules.table.filters',
			full_name: 'kiara_plugin.tabular.modules.table.filters.TableFiltersModule'
		}
	};
	const exampleModelTypeMetadata = {
		type_name: 'database_metadata',

		authors: {
			authors: [
				{
					name: 'Markus Binsteiner',
					email: 'markus@frkl.io'
				},
				{
					name: 'Markus Binsteiner 2',
					email: 'markus@frkl.io'
				}
			]
		},
		context: {
			references: {
				source_repo: {
					url: 'https://github.com/DHARPA-Project/kiara_plugin.tabular',
					desc: 'The module package git repository.'
				},
				documentation: {
					url: 'https://DHARPA-Project.github.io/kiara_plugin.tabular/',
					desc: 'The url for the module package documentation.'
				}
			},
			labels: {
				package: 'kiara_plugin.tabular'
			}
		},
		python_class: {
			python_class_name: 'DatabaseMetadata',
			python_module_name: 'kiara_plugin.tabular.models.db',
			full_name: 'kiara_plugin.tabular.models.db.DatabaseMetadata'
		}
	};
</script>

<Template let:args>
	<section class="prose">
		<ItemMetadata {...args} />
	</section>
</Template>
<Story name="Default" args={{ item: exampleOperationMetadata }} />
<Story name="Data Type" args={{ item: exampleDataTypeMetadata }} />
<Story name="Module" args={{ item: exampleModuleMetadata }} />
<Story name="Model Type" args={{ item: exampleModelTypeMetadata }} />
