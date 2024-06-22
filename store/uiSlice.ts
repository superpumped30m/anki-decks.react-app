import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	deckModalVisible: false,
};

export const uiSlice = createSlice({
	name: "ui",
	initialState: initialState,
	reducers: {
		toggleDeckModalVisibility: (state) => {
			state.deckModalVisible = !state.deckModalVisible;
		},
	},
});

export const { toggleDeckModalVisibility } = uiSlice.actions;
export default uiSlice.reducer;
