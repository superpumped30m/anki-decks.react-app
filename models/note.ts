/**
 * Interface representing a Note.
 * Notes contain the raw information that is formatted into a number of cards
 * according to the models.
 */
export interface Note {
	/**
	 * The epoch milliseconds of when the note was created.
	 */
	id: number;

	/**
	 * Globally unique ID, almost certainly used for syncing.
	 */
	guid: string;

	/**
	 * Model ID.
	 */
	mid: number;

	/**
	 * Modification timestamp, epoch seconds.
	 */
	mod: number;

	/**
	 * Update sequence number: used for finding diffs when syncing.
	 * See the description in the cards table for more info.
	 */
	usn: number;

	/**
	 * Space-separated string of tags.
	 * Includes space at the beginning and end, for LIKE "% tag %" queries.
	 */
	tags: string;

	/**
	 * The values of the fields in this note, separated by 0x1f (31) character.
	 */
	flds: string;

	/**
	 * Sort field: used for quick sorting and duplicate check.
	 * The sort field is an integer so that when users are sorting on a field that contains only numbers,
	 * they are sorted in numeric instead of lexical order. Text is stored in this integer field.
	 */
	sfld: number;

	/**
	 * Field checksum used for duplicate check.
	 * Integer representation of the first 8 digits of the SHA1 hash of the first field.
	 */
	csum: number;

	/**
	 * Unused field.
	 */
	flags: number;

	/**
	 * Unused field.
	 */
	data: string;
}
