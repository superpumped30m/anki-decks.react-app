/**
 * Interface representing the template of a card in the note model.
 */
export interface Template {
	name: string; // Name of the template
	ord: number; // Ordinal number identifying the template
	qfmt: string; // Question format
	afmt: string; // Answer format
	bqfmt: string; // Browser question format (optional)
	bafmt: string; // Browser answer format (optional)
	did: number | null; // Deck ID (optional)
	bfont: string; // Browser font
	bsize: number; // Browser font size
}
