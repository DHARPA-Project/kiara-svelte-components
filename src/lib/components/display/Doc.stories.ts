import type { Meta, StoryObj } from '@storybook/svelte';
import Doc from './Doc.svelte';

const meta = {
	title: 'Display/Doc',
	component: Doc,
	tags: ['autodocs']
} satisfies Meta<Doc>;

const minimalDoc = {
	description: '-- n/a --',
	doc: null
};

const docWithMarkdown = {
	description: 'The description field of a Doc, summarising what the item does.',
	doc: 'The Doc field of a doc, which can contain markdown.\n\nThe markdown should be rendered to inlude\n[links](https://github.com/DHARPA-project/kiara) and other **formatting things**. '
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * You'll probably want to wrap this component in `<section class="prose">` to make it look good
 */
export const Default: Story = {
	args: {
		doc: docWithMarkdown
	}
};

export const JustSummary: Story = {
	args: {
		doc: docWithMarkdown,
		verbose: false
	}
};

/**
 * items with description = '-- n/a --' are just not rendered, because this information isn't useful to show to end users
 */
export const Minimal: Story = {
	args: {
		doc: minimalDoc
	}
};
