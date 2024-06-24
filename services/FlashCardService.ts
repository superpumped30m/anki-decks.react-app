export class FlashcardService {
	constructor(private readonly context: any) {} // Assuming context provides access to contentResolver

	// Function to get all decks
	async getAllDecks(): Promise<[]> {
		return [];
		// try {
		// 	const decksCursor = await this.context.contentResolver?.query(
		// 		FlashCardsContract.Deck.CONTENT_ALL_URI,
		// 		null, // projection - get all columns
		// 		null, // selection - no filtering
		// 		null, // selectionArgs - not used for this URI
		// 		null // sortOrder - not used for this URI
		// 	);

		// 	if (decksCursor && decksCursor.moveToFirst()) {
		// 		const decks: HashMap<Long, String> = new HashMap<Long, String>();
		// 		do {
		// 			const deckId = decksCursor.getLong(
		// 				decksCursor.getColumnIndex(FlashCardsContract.Deck.DECK_ID)
		// 			);
		// 			const deckName = decksCursor.getString(
		// 				decksCursor.getColumnIndex(FlashCardsContract.Deck.DECK_NAME)
		// 			);
		// 			decks.put(deckId, deckName);
		// 		} while (decksCursor.moveToNext());
		// 		return decks;
		// 	}
		// 	return null;
		// } catch (error) {
		// 	console.error("Error getting all decks:", error);
		// 	return null;
		// } finally {
		// 	decksCursor?.close(); // Close cursor if it exists
		// }
	}

	// Function to get a specific deck by ID
	async getDeck(deckId: number): Promise<any | null> {
		// try {
		// 	const deckUri = Uri.withAppendedPath(
		// 		FlashCardsContract.Deck.CONTENT_ALL_URI,
		// 		deckId.toString()
		// 	);
		// 	const decksCursor = await this.context.contentResolver?.query(
		// 		deckUri,
		// 		null, // projection - get all columns
		// 		null, // selection - no filtering
		// 		null, // selectionArgs - not used for this URI
		// 		null // sortOrder - not used for this URI
		// 	);

		// 	if (decksCursor && decksCursor.moveToFirst()) {
		// 		const deck = new JSONObject();
		// 		const deckId = decksCursor.getLong(
		// 			decksCursor.getColumnIndex(FlashCardsContract.Deck.DECK_ID)
		// 		);
		// 		const deckName = decksCursor.getString(
		// 			decksCursor.getColumnIndex(FlashCardsContract.Deck.DECK_NAME)
		// 		);
		// 		const deckOptions = new JSONObject(
		// 			decksCursor.getString(
		// 				decksCursor.getColumnIndex(FlashCardsContract.Deck.OPTIONS)
		// 			)
		// 		);
		// 		const deckCounts = new JSONArray(
		// 			decksCursor.getString(
		// 				decksCursor.getColumnIndex(FlashCardsContract.Deck.DECK_COUNTS)
		// 			)
		// 		);

		// 		deck.put(deckName, deckId);
		// 		deck.put("options", deckOptions);
		// 		deck.put("counts", deckCounts);
		// 		return deck;
		// 	}
		// 	return null;
		// } catch (error) {
		// 	console.error("Error getting deck:", error);
		// 	return null;
		// } finally {
		// 	decksCursor?.close(); // Close cursor if it exists
		// }
		return null;
	}

	// Function to update the selected deck
	async updateSelectedDeck(deckId: number): Promise<boolean> {
		return false;
		// try {
		// 	const contentResolver = this.context.contentResolver;
		// 	const selectedDeckUri = FlashCardsContract.Deck.CONTENT_SELECTED_URI;
		// 	const values = new ContentValues();
		// 	values.put(FlashCardsContract.Deck.DECK_ID, deckId);
		// 	const updateCount = await contentResolver?.update(
		// 		selectedDeckUri,
		// 		values,
		// 		null,
		// 		null
		// 	);
		// 	return updateCount && updateCount > 0; // Check if update was successful
		// } catch (error) {
		// 	console.error("Error updating selected deck:", error);
		// 	return false;
		// }
	}

	// Function to get scheduled cards for review
	async getScheduledCards(
		deckId: number,
		limit: number = 1
	): Promise<any | null> {
		//   try {
		//     const scheduledCardsUri = FlashCardsContract.ReviewInfo.CONTENT_URI;
		//     const deckArguments = [limit.toString(), deckId.toString()];
		//     const deckSelector = "limit=?, deckID=?";
		//     const cursor = await this.context.contentResolver?.query(
		//       scheduledCardsUri,
		//       null, // projection - get all columns
		//       deckSelector,
		//       deckArguments,
		//       null // sortOrder is ignored for this URI
		//     );
		//     return cursor;
		//   } catch (error) {
		//     console.error("Error getting scheduled cards:", error);
		//     return null;
		//   }
	}

	// Function to update answer for a reviewed card
	async updateReviewInfo(
		noteId: number,
		cardOrd: number,
		ease: number,
		timeTaken: number
	): Promise<boolean> {
		return false;
		//   try {
		//     const contentResolver = this.context.contentResolver;
		//     const reviewInfoUri = FlashCardsContract.ReviewInfo.CONTENT_URI;
		//     const values = new ContentValues();
		//     values.put(FlashCardsContract.ReviewInfo.NOTE_ID, noteId);
		//     values.put(FlashCardsContract.ReviewInfo.CARD_ORD, cardOrd);
		//     values.put(FlashCardsContract.ReviewInfo.EASE, ease);
		//     values.put(FlashCardsContract.ReviewInfo.TIME_TAKEN, timeTaken);

		//     const updateCount = await contentResolver?.update(reviewInfoUri, values, null, null);
		//     return updateCount && updateCount > 0; // Check if update was successful
		//   } catch (error) {
		//     console.error("Error updating review info:", error);
		//     return false;
		//   }
	}

	// Function to bury a card (remove from scheduled reviews)
	async buryCard(noteId: number, cardOrd: number): Promise<boolean> {
		//   try {
		//     const contentResolver = this.context.contentResolver;
		//     const reviewInfoUri = FlashCardsContract.ReviewInfo.CONTENT_URI;
		//     const values = new ContentValues();
		//     values.put(FlashCardsContract.ReviewInfo.NOTE_ID, noteId);
		//     values.put(FlashCardsContract.ReviewInfo.CARD_ORD, cardOrd);
		//     values.put(FlashCardsContract.ReviewInfo.BURY, 1);

		//     const updateCount = await contentResolver?.update(reviewInfoUri, values, null, null);
		//     return updateCount && updateCount > 0; // Check if update was successful
		//   } catch (error) {
		//     console.error("Error burying card:", error);
		//     return false;
		//   }
		return false;
	}

	// Function to suspend a card (remove from scheduled reviews)
	async suspendCard(noteId: number, cardOrd: number): Promise<boolean> {
		return false;
		//   try {
		//     const contentResolver = this.context.contentResolver;
		//     const reviewInfoUri = FlashCardsContract.ReviewInfo.CONTENTURI;
		//     const values = new ContentValues();
		//     values.put(FlashCardsContract.ReviewInfo.NOTE_ID, noteId);
		//     values.put(FlashCardsContract.ReviewInfo.CARD_ORD, cardOrd);
		//     values.put(FlashCardsContract.ReviewInfo.SUSPEND, 1);

		//     const updateCount = await contentResolver?.update(reviewInfoUri, values, null, null);
		//     return updateCount && updateCount > 0; // Check if update was successful
		//   } catch (error) {
		//     console.error("Error suspending card:", error);
		//     return false;
		//   }
	}

	// Function to get all cards for a specific note
	async getCardsForNote(noteId: number): Promise<any | null> {
		// try {
		// 	const noteUri = Uri.withAppendedPath(
		// 		FlashCardsContract.Note.CONTENT_URI,
		// 		noteId.toString()
		// 	);
		// 	const cardsUri = Uri.withAppendedPath(noteUri, "cards");
		// 	const cursor = await this.context.contentResolver?.query(
		// 		cardsUri,
		// 		null, // projection - get all columns
		// 		null, // selection is ignored for this URI
		// 		null, // selectionArgs is ignored for this URI
		// 		null // sortOrder is ignored for this URI
		// 	);
		// 	return cursor;
		// } catch (error) {
		// 	console.error("Error getting cards for note:", error);
		// 	return null;
		// }
	}

	// Function to get a specific card by note ID and card ordinal
	async getCard(noteId: number, cardOrd: number): Promise<any | null> {
		// try {
		// 	const noteUri = Uri.withAppendedPath(
		// 		FlashCardsContract.Note.CONTENT_URI,
		// 		noteId.toString()
		// 	);
		// 	const cardsUri = Uri.withAppendedPath(noteUri, "cards");
		// 	const specificCardUri = Uri.withAppendedPath(
		// 		cardsUri,
		// 		cardOrd.toString()
		// 	);
		// 	const cursor = await this.context.contentResolver?.query(
		// 		specificCardUri,
		// 		null, // projection - get all columns
		// 		null, // selection is ignored for this URI
		// 		null, // selectionArgs is ignored for this URI
		// 		null // sortOrder is ignored for this URI
		// 	);
		// 	return cursor;
		// } catch (error) {
		// 	console.error("Error getting card:", error);
		// 	return null;
		// }
	}

	// Function to move a card to a different deck
	async moveCardToDeck(
		noteId: number,
		cardOrd: number,
		newDeckId: number
	): Promise<boolean> {
		return false;
		// try {
		// 	const contentResolver = this.context.contentResolver;
		// 	const noteUri = Uri.withAppendedPath(
		// 		FlashCardsContract.Note.CONTENT_URI,
		// 		noteId.toString()
		// 	);
		// 	const cardsUri = Uri.withAppendedPath(noteUri, "cards");
		// 	const cardUri = Uri.withAppendedPath(cardsUri, cardOrd.toString());

		// 	const values = new ContentValues();
		// 	values.put(FlashCardsContract.Card.DECK_ID, newDeckId);

		// 	const updateCount = await contentResolver?.update(
		// 		cardUri,
		// 		values,
		// 		null,
		// 		null
		// 	);
		// 	return updateCount && updateCount > 0; // Check if update was successful
		// } catch (error) {
		// 	console.error("Error moving card to deck:", error);
		// 	return false;
		// }
	}
}
