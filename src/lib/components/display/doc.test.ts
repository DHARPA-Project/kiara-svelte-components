import { describe, expect, it } from 'vitest';
import { Doc } from '../../index.js';
import { render, screen } from '@testing-library/svelte';

describe('Doc', () => {
	const minimalDoc = {
		description: '-- n/a --',
		doc: null
	};

	const docWithMarkdown = {
		description: 'Create an array of date objects from an array of strings.',
		doc: 'This module is very simplistic at the moment, more functionality and options will be added in the future.\n\nAt its core, this module uses the standard parser from the\n[dateutil](https://github.com/dateutil/dateutil) package to parse strings into dates. '
	};

	const docWithMaliciousMarkdown = {
		description: 'Bad',
		doc: '<script>alert("hello world")</script>'
	};
	it('shows nothing if no meaningful documentation provided', () => {
		render(Doc, { props: { doc: minimalDoc } });
		// Don't render the n/a, it isn't useful to the end user
		expect(screen.queryByText('-- n/a --')).toBeFalsy();
	});

	it('shows all available documentation by default', () => {
		render(Doc, { props: { doc: docWithMarkdown } });
		// description property is rendered as is
		expect(screen.getByText(docWithMarkdown.description)).toBeInTheDocument();
		// all the text from doc is rendered
		expect(screen.getByText(/very simplistic/)).toBeInTheDocument();
	});

	it('only shows summary when verbose is false', () => {
		render(Doc, { props: { doc: docWithMarkdown, verbose: false } });
		// description property is rendered as is
		expect(screen.getByText(docWithMarkdown.description)).toBeInTheDocument();
		// all the text from doc is rendered
		expect(screen.queryByText(/very simplistic/)).not.toBeInTheDocument();
	});

	it('renders markdown in the doc property', () => {
		render(Doc, { props: { doc: docWithMarkdown } });
		expect(screen.getByRole('link', { name: 'dateutil' })).toBeInTheDocument();
	});

	it('does not render malicious markdown in the doc property', () => {
		render(Doc, { props: { doc: docWithMaliciousMarkdown } });
		const theDom = document.body.innerHTML;
		expect(theDom).toContain('Bad');
		expect(theDom).not.toContain('script');
	});
});
