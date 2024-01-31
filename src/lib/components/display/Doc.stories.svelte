<script context="module">
	import Doc from './Doc.svelte';
	export const meta = {
		title: 'Display/Doc',
		component: Doc,
		tags: ['autodocs']
	};
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
	const minimalDoc = {
		description: '-- n/a --',
		doc: null
	};

	const docWithMarkdown = {
		description: 'The description field of a Doc, summarising what the item does.',
		doc: 'The Doc field of a doc, which can contain markdown.\n\nThe markdown should be rendered to inlude\n[links](https://github.com/DHARPA-project/kiara) and other **formatting things**. '
	};
</script>

<Template let:args>
	<section class="prose">
		<Doc {...args} />
	</section>
</Template>
<Story
	name="Default"
	args={{ doc: docWithMarkdown }}
	parameters={{
		docs: {
			description: {
				story:
					'You\'ll probably want to wrap this component in `<section class="prose">` to make it look good'
			}
		}
	}}
/>

<Story name="Just summary" args={{ doc: docWithMarkdown, verbose: false }} />

<Story
	name="Minimal"
	args={{ doc: minimalDoc }}
	parameters={{
		docs: {
			description: {
				story:
					"items with description = '-- n/a --' are just not rendered, because this information isn't useful to show to end users"
			}
		}
	}}
/>
