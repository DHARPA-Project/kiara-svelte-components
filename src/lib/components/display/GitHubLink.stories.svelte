<script context="module">
	import GitHubLink from './GitHubLink.svelte';
	export const meta = {
		title: 'Display/GitHub Link',
		component: GitHubLink,
		tags: ['autodocs'],
		argTypes: {
			href: { control: 'text', description: 'Link to relevant code on GitHub', type: 'string' }
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
	import { userEvent, within } from '@storybook/testing-library';
</script>

<Template let:args>
	<GitHubLink {...args} />
</Template>
<Story
	name="Default"
	args={{ href: 'https://github.com/DHARPA-project/kiara-svelte-components' }}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.hover(canvas.getByRole('link'));
	}}
/>

<Story
	name="Styled"
	parameters={{
		docs: {
			description: {
				story:
					'Optionally provide styling via tailwind classes. You\'ll need to specify "fill" to change the icon colour'
			}
		}
	}}
	args={{
		href: 'https://github.com/DHARPA-project/kiara-svelte-components',
		classes: 'text-purple-500 hover:fill-red-500 fill-purple-500'
	}}
/>
