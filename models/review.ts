/**
 * Interface representing a Review Log entry.
 * Revlog is a review history; it has a row for every review you've ever done!
 */
export interface Revlog {
	/**
	 * The epoch-milliseconds timestamp of when you did the review.
	 */
	id: number;

	/**
	 * The ID of the card being reviewed. Refers to cards.id.
	 */
	cid: number;

	/**
	 * Update sequence number: used for finding diffs when syncing.
	 * See the description in the cards table for more info.
	 */
	usn: number;

	/**
	 * Which button you pushed to score your recall.
	 * Review: 1 (wrong), 2 (hard), 3 (ok), 4 (easy)
	 * Learn/Relearn: 1 (wrong), 2 (ok), 3 (easy)
	 */
	ease: number;

	/**
	 * Interval (i.e., as in the card table).
	 */
	ivl: number;

	/**
	 * Last interval (i.e., the last value of ivl).
	 * Note that this value is not necessarily equal to the actual interval between this review and the preceding review.
	 */
	lastIvl: number;

	/**
	 * The ease factor of the card, used in scheduling algorithms.
	 */
	factor: number;

	/**
	 * How many milliseconds your review took, up to 60000 (60s).
	 */
	time: number;

	/**
	 * The type of review.
	 * 0 = learn, 1 = review, 2 = relearn, 3 = filtered, 4 = manual.
	 */
	type: number;
}
