import { getHighlighterCore } from 'shikiji/core';
import { getWasmInlined } from 'shikiji/wasm';

const highlighter = await getHighlighterCore({
	themes: [import('shikiji/themes/nord.mjs')],
	langs: [() => import('shikiji/langs/python.mjs')],
	loadWasm: getWasmInlined
});

export function highlightPythonCode(code: string) {
	return highlighter.codeToHtml(code.trim(), { lang: 'python', theme: 'nord' });
}
