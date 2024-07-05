import React from "react";
import { Redirect } from "expo-router";
import dummyNotes, {
	db,
	fetchAllNotes,
	insertNote,
	setupDatabase,
} from "@/services/expo-sqlite";
import { initTables } from "@/services/db";

export default () => {
	initTables(db);
	// setupDatabase().then((result) => {
	// 	console.log("result", result);
	// 	dummyNotes.map((note) => insertNote(note));
	// 	fetchAllNotes();
	// });

	return <Redirect href="(root)" />;
};
