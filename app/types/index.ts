interface Card {
	id: string;
	notesId: string;
	deckId: string;
	ordinal: any;
	/** 
     * ord -> ordinal
      -- ordinal : identifies which of the card templates or cloze deletions it corresponds to 
      --   for card templates, valid values are from 0 to num templates - 1
      --   for cloze deletions, valid values are from 0 to max cloze index - 1 (they're 0 indexed despite the first being called `c1`)
     */

	modificationTime?: string;
	type: "new" | "learning" | "review" | "relearning";
	due: number;
	/**
     -- Due is used differently for different card types: 
     --   new: the order in which cards are to be studied; starts from 1.
     --   learning/relearning: epoch timestamp in seconds
     --   review: days since the collection's creation time
     */

	interval: number;
	/**
	 *  interval (used in SRS algorithm). Negative = seconds, positive = days
	 */

	factor: number;
	/**
	 * -- The ease factor of the card in permille (parts per thousand). If the ease factor is 2500, the card’s interval will be multiplied by 2.5 the next time you press Good.
	 */

	repetition: number;
	/**
	 * -- number of reviews
	 */

	lapses: number;
	/**
     *  -- the number of times the card went from a "was answered correctly" 
      --   to "was answered incorrectly" state
     */

	left: number;
	/**
       *  -- of the form a*1000+b, with:
      -- a the number of reps left today
      -- b the number of reps left till graduation
      -- for example: '2004' means 2 reps left today and 4 reps till graduation
    */

	original_due: number;
	/**
     -- original due: In filtered decks, it's the original due date that the card had before moving to filtered.
     -- If the card lapsed in scheduler1, then it's the value before the lapse. (This is used when switching to scheduler 2. At this time, cards in learning becomes due again, with their previous due date)
     -- In any other case it's 0.
     */

	original_did: number;
	/**
	 * -- original did: only used when the card is currently in filtered deck
	 */

	flags: number;
	/**
	 * -- an integer. This integer mod 8 represents a "flag", which can be see in browser and while reviewing a note. Red 1, Orange 2, Green 3, Blue 4, no flag: 0. This integer divided by 8 represents currently nothing
	 */

	data?: string;
}



// Card {
//     id: row.get(0)?,
//     note_id: row.get(1)?,
//     deck_id: row.get(2)?,
//     template_idx: row.get(3)?,
//     mtime: row.get(4)?,
//     usn: row.get(5)?,
//     ctype: row.get(6)?,
//     queue: row.get(7)?,
//     due: row.get(8).ok().unwrap_or_default(),
//     interval: row.get(9)?,
//     ease_factor: row.get(10)?,
//     reps: row.get(11)?,
//     lapses: row.get(12)?,
//     remaining_steps: row.get(13)?,
//     original_due: row.get(14).ok().unwrap_or_default(),
//     original_deck_id: row.get(15)?,
//     flags: row.get(16)?,
//     data: row.get(17)?,
// }