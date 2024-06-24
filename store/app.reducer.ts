// src/store/reducers.ts
import {
	AppState,
	ADD_MODEL,
	UPDATE_MODEL,
	DELETE_MODEL,
	AppActionTypes,
} from "./types";

const initialState: AppState = {
	models: {},
	notes: [],
	cards: [],
	revlogs: [],
	col: null,
};

const appReducer = (state = initialState, action: AppActionTypes): AppState => {
	switch (action.type) {
		case ADD_MODEL:
			return {
				...state,
				models: { ...state.models, [action.payload.id]: action.payload },
			};
		case UPDATE_MODEL:
			return {
				...state,
				models: { ...state.models, [action.payload.id]: action.payload },
			};
		case DELETE_MODEL:
			const { [action.payload]: _, ...rest } = state.models;
			return {
				...state,
				models: rest,
			};
		// Add cases for other actions
		default:
			return state;
	}
};

export default appReducer;
