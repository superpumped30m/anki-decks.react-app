/**
 * Interface representing deleted cards, notes, and decks that need to be synced.
 */
export interface Grave {
	/**
	 * Update sequence number should be set to -1, indicating changes that need to be pushed to the server.
	 */
	usn: number;

	/**
	 * Original ID of the deleted card, note, or deck.
	 */
	oid: number;

	/**
	 * Type of the entity:
	 * 0 for a card,
	 * 1 for a note,
	 * 2 for a deck.
	 */
	type: number;
}
