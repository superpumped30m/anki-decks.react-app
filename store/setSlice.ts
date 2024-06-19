import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

const setSlice = createSlice({
	name: "sets",
	initialState: [],
	reducers: {
		// Define any actions related to sets if needed
	},
});

export default setSlice.reducer;
