/**
 * Interface representing a field in the note model.
 */
export interface Field {
	name: string; // Name of the field
	ord: number; // Ordinal number identifying the field
	rtl: boolean; // Right-to-left text
	sticky: boolean; // Sticky field
	media: string[]; // List of media associated with the field
}
