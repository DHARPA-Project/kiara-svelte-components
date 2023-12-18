import { getHighlighter } from 'shikiji';

const language = 'python';
const theme = 'nord';
const highlighter = await getHighlighter({
	themes: [theme],
	langs: [language]
});

export function highlightPythonCode(code: string) {
	return highlighter.codeToHtml(code.trim(), { lang: language, theme });
}
