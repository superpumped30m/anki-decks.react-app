/**
 * Interface representing a card in Anki.
 * Cards are what you review. There can be multiple cards for each note, as determined by the Template.
 */
export interface Card {
	/**
	 * Unique identifier for the card.
	 * This is the primary key of the cards table.
	 */
	id: string;

	/**
	 * Identifier for the note that this card is associated with.
	 * Corresponds to notes.id.
	 */
	nid: number;

	/**
	 * Identifier for the deck that this card is part of.
	 * Corresponds to the deck id available in the col table.
	 */
	did: number;

	/**
	 * Ordinal identifier which determines the card template or cloze deletion it corresponds to.
	 * For card templates, valid values are from 0 to num templates - 1.
	 * For cloze deletions, valid values are from 0 to max cloze index - 1.
	 */
	ord: number;

	/**
	 * The epoch milliseconds of when the card was created.
	 */
	mod: number;

	/**
	 * Update sequence number used to determine differences when syncing.
	 * A value of -1 indicates changes that need to be pushed to the server.
	 * A usn < server usn indicates changes that need to be pulled from the server.
	 */
	usn: number;

	/**
	 * Type of the card.
	 * 0 = new, 1 = learning, 2 = review, 3 = relearning.
	 */
	type: "new" | "learning" | "review" | "relearning";

	/**
	 * Queue status of the card.
	 * -3 = user buried (in scheduler 2), -2 = scheduler buried (in scheduler 2), -2 = buried (in scheduler 1), -1 = suspended,
	 * 0 = new, 1 = learning, 2 = review (as for type), 3 = in learning (next review in at least a day after the previous review), 4 = preview.
	 */
	queue: number;

	/**
	 * Due information for the card, used differently for different card types.
	 * - New: the order in which cards are to be studied; starts from 1.
	 * - Learning/relearning: epoch timestamp in seconds.
	 * - Review: days since the collection's creation time.
	 */
	due: number;

	/**
	 * Interval used in the SRS algorithm.
	 * Negative = seconds, positive = days.
	 */
	ivl: number;

	/**
	 * The ease factor of the card in permille (parts per thousand).
	 * If the ease factor is 2500, the card’s interval will be multiplied by 2.5 the next time you press Good.
	 */
	factor: number;

	/**
	 * Number of reviews the card has undergone.
	 */
	reps: number;

	/**
	 * The number of times the card went from a "was answered correctly" to "was answered incorrectly" state.
	 */
	lapses: number;

	/**
	 * Number of repetitions left today and until graduation.
	 * Format: a*1000 + b, where a is the number of reps left today, and b is the number of reps left till graduation.
	 * For example, '2004' means 2 reps left today and 4 reps till graduation.
	 */
	left: number;

	/**
	 * Original due date before the card was moved to a filtered deck or lapsed in scheduler1.
	 * If the card lapsed in scheduler1, this is the value before the lapse.
	 * Otherwise, it's 0.
	 */
	odue: number;

	/**
	 * Original deck id when the card is currently in a filtered deck.
	 */
	odid: number;

	/**
	 * Flags associated with the card.
	 * The integer mod 8 represents a "flag" (1 = Red, 2 = Orange, 3 = Green, 4 = Blue, 0 = no flag).
	 * The integer divided by 8 currently represents nothing.
	 */
	flags: number;

	/**
	 * Additional data associated with the card, currently unused.
	 */
	data?: string;
}
