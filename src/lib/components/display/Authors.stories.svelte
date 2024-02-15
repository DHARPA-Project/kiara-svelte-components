<script context="module">
	import Authors from './Authors.svelte';
	export const meta = {
		title: 'Display/Authors',
		component: Authors,
		tags: ['autodocs'],
		argTypes: {
			href: { control: 'text', description: 'Link to relevant code on GitHub', type: 'string' }
		}
	};

	const exampleAuthors = [{ name: 'Markus', email: 'markus@frkl.io' }, { name: 'Mariella' }];
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Authors {...args} />
</Template>
<Story name="Default" args={{ authors: exampleAuthors }} />

<Story name="Single Author" args={{ authors: exampleAuthors.slice(0, 1) }} />
