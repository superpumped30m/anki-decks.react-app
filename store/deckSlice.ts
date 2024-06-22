import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DECKS_DATA, DeckType } from "@/data";
import { RootState } from ".";

const initialState: DeckType[] = DECKS_DATA;

const toggleExpandRecursive = (decks: DeckType[], id: number) => {
	for (let deck of decks) {
		if (deck.id === id) {
			deck.isExpanded = !deck.isExpanded;
		}
		if (deck.childrens.length > 0) {
			toggleExpandRecursive(deck.childrens, id);
		}
	}
};

export const deckSlice = createSlice({
	name: "decks",
	initialState: initialState,
	reducers: {
		toggleDeckExpand: (state, action) => {
			toggleExpandRecursive(state, action.payload);
			// const toggleExpand = (decks: DeckType[], id: number) => {
			// 	decks.forEach((deck) => {
			// 		if (deck.id === id) {
			// 			deck.isExpanded = !deck.isExpanded;
			// 		} else if (deck.childrens) {
			// 			toggleExpand(deck.childrens, id);
			// 		}
			// 	});
			// };
			// toggleExpand(state, action.payload);
		},
	},
});

export const { toggleDeckExpand } = deckSlice.actions;
export const getDecksCount = (state: RootState) => state.decks.length;
export default deckSlice.reducer;
