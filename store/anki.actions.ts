import { Model } from "@/models/model";
import { ADD_MODEL, UPDATE_MODEL, DELETE_MODEL, AppActionTypes } from "./types";

export const addModel = (model: Model): AppActionTypes => ({
	type: ADD_MODEL,
	payload: model,
});

export const updateModel = (model: Model): AppActionTypes => ({
	type: UPDATE_MODEL,
	payload: model,
});

export const deleteModel = (modelId: number): AppActionTypes => ({
	type: DELETE_MODEL,
	payload: modelId,
});
