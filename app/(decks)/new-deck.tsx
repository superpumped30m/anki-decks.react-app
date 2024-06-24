import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Switch,
	ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { defaultStyleSheet } from "@/constants/Styles";
import { TextInput } from "react-native-gesture-handler";
import { db } from "@/services/expo-sqlite";

type InformationType = {
	name: string;
	description: string;
	favorite: boolean;
};
export default function NewDeckScreen() {
	const [information, setInformation] = useState<InformationType>({
		name: "",
		description: "",
		favorite: false,
	});

	const onCreateDeck = async () => {
		if (!information.name) {
			showValidationToast();
			return;
		}
		// Store to SQLite

		try {
			const result = await db.runAsync(
				"INSERT INTO decks (name, description, favorite) VALUES (?, ?, ?)",
				[information.name, information.description, information.favorite]
			);
			console.log("Inserted Deck:", result);
			// result.lastInsertRowId; // Return the ID of the inserted note
		} catch (error) {
			console.error("Failed to insert note:", error);
			// return null;
		}

		try {
			const allNotes = await db.getAllAsync("SELECT * FROM decks");
			console.log("All notes:", allNotes);
			return allNotes;
		} catch (error) {
			console.error("Failed to fetch notes:", error);
		}

		showSuccessToast();
		setInformation({
			name: "",
			description: "",
			favorite: false,
		});
	};

	const showValidationToast = () => {
		ToastAndroid.show("Please fill required fields", ToastAndroid.SHORT);
	};
	const showSuccessToast = () => {
		ToastAndroid.show("Set created Successfully", ToastAndroid.SHORT);
	};
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={[
					defaultStyleSheet.container,
					{ marginTop: 20, marginHorizontal: 16 },
				]}
			>
				<TextInput
					style={defaultStyleSheet.input}
					placeholder="Deck Name..."
					value={information.name}
					onChangeText={(text) => {
						setInformation({ ...information, name: text });
					}}
				/>
				<TextInput
					style={defaultStyleSheet.input}
					placeholder="Deck Description..."
					value={information.description}
					onChangeText={(text) => {
						setInformation({ ...information, description: text });
					}}
				/>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginVertical: 8,
					}}
				>
					<Switch
						ios_backgroundColor="#3e3e3e"
						onValueChange={(value) =>
							setInformation({ ...information, favorite: value })
						}
						value={information.favorite}
					/>
					<Text style={{ marginLeft: 8 }}>add to favorites</Text>
				</View>
			</View>
			<View style={{ alignItems: "center" }}>
				<TouchableOpacity
					style={defaultStyleSheet.bottomButton}
					onPress={onCreateDeck}
				>
					<Text style={defaultStyleSheet.buttonText}>Create Deck</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		backgroundColor: "white",
		paddingHorizontal: 10,
	},
	separator: {
		marginVertical: 20,
		height: 1,
		width: "90%",
		marginHorizontal: "auto",
	},
	item: {
		backgroundColor: "lightgray",
		padding: 15,
		marginVertical: 1,
		marginHorizontal: 4,
		textAlign: "center",
	},
	title: {
		fontSize: 15,
		fontWeight: "semibold",
		textAlign: "center",
		marginTop: 20,
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
	responseButtonContainer: {
		width: "100%",
		height: 60,
		borderColor: "black",
		display: "flex",
		flexDirection: "row",
		gap: 5,
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	responseButtonView: {
		width: "20%",
		height: "auto",
		borderLeftWidth: 1,
		borderRightWidth: 1,
	},
	responseButtonText: {
		fontSize: 25,
		fontWeight: "semibold",
		textAlign: "center",
	},
});

const dropdownStyles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 16,
	},
	dropdown: {
		height: 50,
		borderColor: "gray",
		borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
	},
	icon: {
		marginRight: 5,
	},
	label: {
		position: "absolute",
		backgroundColor: "white",
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 14,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 16,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
});
