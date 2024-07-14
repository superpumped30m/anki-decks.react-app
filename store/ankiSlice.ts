// src/store/ankiSlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ankiService } from "@/services/AnkiService";
import { DeckType } from "@/data";
import { Note } from "@/models/note";
import { Card } from "@/models/card";

export const fetchAllDecks = createAsyncThunk(
	"anki/fetchAllDecks",
	async () => {
		const response = await ankiService.getAllDecks();
		return response;
	}
);

export const fetchDeckDetails = createAsyncThunk(
	"anki/fetchDeckDetails",
	async (deckId: number) => {
		const response = await ankiService.getDeckDetails(deckId);
		return response;
	}
);
export const fetchAllNotes = createAsyncThunk(
	"anki/fetchAllNotes",
	async () => {
		const response = await ankiService.getAllNotes();
		return response;
	}
);

export const fetchAllCards = createAsyncThunk(
	"anki/fetchAllCards",
	async () => {
		const response = await ankiService.getAllCards();
		return response;
	}
);

export const importDeck = createAsyncThunk(
	"anki/importDeck",
	async (file: File) => {
		const response = await ankiService.importDeck(file);
		return response;
	}
);

export const exportCollection = createAsyncThunk(
	"anki/exportCollection",
	async () => {
		const response = await ankiService.exportCollection();
		return response;
	}
);

const initialState: {
	decks: DeckType[];
	currentDeck: DeckType | null;
	notes: Note[];
	cards: Card[];
	status: "idle" | "succeeded" | "failed" | "loading";
	importStatus: string;
	exportStatus: string;
	error: string | undefined;
} = {
	decks: [],
	currentDeck: null,
	notes: [],
	cards: [],
	status: "idle",
	importStatus: "idle",
	exportStatus: "idle",
	error: "",
};

const ankiSlice = createSlice({
	name: "anki",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(importDeck.pending, (state) => {
				state.importStatus = "loading";
			})
			.addCase(importDeck.fulfilled, (state) => {
				state.importStatus = "succeeded";
			})
			.addCase(importDeck.rejected, (state, action) => {
				state.importStatus = "failed";
				state.error = action.error.message;
			})
			.addCase(exportCollection.pending, (state) => {
				state.exportStatus = "loading";
			})
			.addCase(exportCollection.fulfilled, (state) => {
				state.exportStatus = "succeeded";
			})
			.addCase(exportCollection.rejected, (state, action) => {
				state.exportStatus = "failed";
				state.error = action.error.message;
			})
			.addCase(fetchAllDecks.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchAllDecks.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.decks = action.payload;
			})
			.addCase(fetchAllDecks.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(fetchDeckDetails.fulfilled, (state, action) => {
				state.currentDeck = action.payload;
			})
			.addCase(fetchAllNotes.fulfilled, (state, action) => {
				state.notes = action.payload;
			})
			.addCase(fetchAllCards.fulfilled, (state, action) => {
				state.cards = action.payload;
			});
	},
});

export default ankiSlice.reducer;
