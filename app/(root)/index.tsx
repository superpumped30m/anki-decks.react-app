import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AccordianList from "@/components/ui/accordian-list";
import { Link } from "expo-router";
import DeckModalForm from "../(tabs)/modal";
import FloatingMenu from "@/components/ui/floating-menu";

export default function IndexScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<AccordianList />
			<Link href="/(deck)/card">Present modal</Link>
			<Text
				style={[
					styles.title,
					{ alignSelf: "center", justifyContent: "center" },
				]}
			>
				No Decks Available
			</Text>
			<DeckModalForm />
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
