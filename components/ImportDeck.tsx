// src/components/ImportDeck.tsx

import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { importDeck } from "@/store/ankiSlice";

const ImportDeck = () => {
	const dispatch = useAppDispatch();
	const importStatus = useAppSelector((state) => state.anki.importStatus);

	const handleImport = async () => {
		try {
			const result = await DocumentPicker.getDocumentAsync({
				type: "application/zip",
			});
			if (result.type === "success") {
				dispatch(importDeck(result.file));
			}
		} catch (error) {
			console.error("Error picking document", error);
		}
	};

	return (
		<View>
			<Button title="Import Deck" onPress={handleImport} />
			<Text>Import Status: {importStatus}</Text>
		</View>
	);
};

export default ImportDeck;
