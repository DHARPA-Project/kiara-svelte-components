import type { Author } from '$lib/kiara.js';

export function stringifyAuthorNames(authors: Author[]): string[] | null {
	return authors?.map((a) => `${a.name}${a.email ? ` (${a.email})` : ''}`) || null;
}
