/**
 * Short description of the item
 */
export type Description = string;

/**
 * Detailed documentation of the item in markdown format
 */
export type Doc = string | null;

/**
 * Documentation about an item
 */
export interface Documentation {
	description?: Description;
	doc?: Doc;
}
