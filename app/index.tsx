import React from "react";
import { Redirect } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import initDatabase from "@/db/init";
// import {}

export default () => {
	const db = useSQLiteContext();
	initDatabase(db);
	return <Redirect href="(root)" />;
};
