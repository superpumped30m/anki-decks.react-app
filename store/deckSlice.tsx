import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DECKS_DATA, DeckType } from "@/data";
import { RootState } from ".";

const initialState: DeckType[] = DECKS_DATA;

export const deckSlice = createSlice({
	name: "decks",
	initialState: initialState,
	reducers: {
		insert: (state) => {
			console.log("state", state);
		},
	},
});

export const { insert } = deckSlice.actions;
export const getDecksCount = (state: RootState) => state.decks.length;
export default deckSlice.reducer;
