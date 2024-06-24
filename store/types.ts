import { Revlog } from "@/models/review";
import { Collection } from "@/models/collection";
import { Model } from "@/models/model";

export interface AppState {
	models: { [modelId: string]: Model };
	notes: Note[];
	cards: Card[];
	revlogs: Revlog[];
	col: Collection | null;
}

export const ADD_MODEL = "ADD_MODEL";
export const UPDATE_MODEL = "UPDATE_MODEL";
export const DELETE_MODEL = "DELETE_MODEL";
// Define other action types as needed

interface AddModelAction {
	type: typeof ADD_MODEL;
	payload: Model;
}

interface UpdateModelAction {
	type: typeof UPDATE_MODEL;
	payload: Model;
}

interface DeleteModelAction {
	type: typeof DELETE_MODEL;
	payload: number; // modelId
}

// Define other action interfaces as needed

export type AppActionTypes =
	| AddModelAction
	| UpdateModelAction
	| DeleteModelAction;
// Add other action types to the union
