<script context="module">
	import Foldable from './Foldable.svelte';
	import { userEvent, within } from '@storybook/testing-library';
	import { expect } from '@storybook/jest';
	export const meta = {
		title: 'Display/Foldable',
		component: Foldable,
		tags: ['autodocs']
	};
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
	const content = "Here's some content that goes inside the foldable, and isn't shown by default";
</script>

<Template let:args>
	<Foldable {...args}>
		<p>{content}</p>
	</Foldable>
</Template>

<Story
	name="Default"
	args={{ title: "Foldable thing's title" }}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// Content hidden by default
		await expect(canvas.queryByText(content)).not.toBeVisible();
		await userEvent.click(canvas.getByRole('button'));
		// click button, content visible
		await expect(canvas.getByText(content)).toBeVisible();
		await userEvent.click(canvas.getByRole('button'));
		// click button again, content hidden
		await expect(canvas.getByText(content)).not.toBeVisible();
	}}
/>
