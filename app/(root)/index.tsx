import { Button, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingMenu from "@/components/ui/floating-menu";
import DecksList from "@/components/ui/decks-list";
import { Link, router } from "expo-router";
import ImportDeck from "@/components/ImportDeck";
import ExportCollection from "@/components/ExportCollection";
import { Text } from "@/components/Themed";
import { useSQLiteContext } from "expo-sqlite";
import ListDecks from "@/components/ui/list-decks";

export default function IndexScreen() {
	const db = useSQLiteContext();
	useEffect(() => {
		const getNotes = async () => {
			const notes = await db.getAllAsync("select * from decks");
			console.log("notes", notes);
		};
		getNotes();
	}, []);
	return (
		<SafeAreaView style={styles.container}>
			{/* <DecksList /> */}
            <ListDecks />
			<Button
				title="Authenticate"
				onPress={() => router.push("/(auth)/signin")}
			/>
			<Text onPress={() => router.push("/(auth)")}>Auth</Text>
			<FloatingMenu />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 0,
		paddingVertical: -40,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	item: {
		backgroundColor: "lightgray",
		padding: 15,
		marginVertical: 1,
		marginHorizontal: 4,
		textAlign: "center",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	button: {
		borderRadius: 14,
		paddingVertical: 15,
		textAlign: "center",
		// justifyContent: "center",
	},
	buttonText: {
		textAlign: "center",
	},
});
