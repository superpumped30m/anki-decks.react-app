import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	TextInput,
	Image,
} from "react-native";
import { StyleSheet } from "react-native";

const GenerateCardsScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity>
					<Text style={styles.headerButton}>Decks</Text>
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Deck Name</Text>
				<TouchableOpacity>
					<Ionicons name="menu-outline" size={25} />
					{/* <Text style={styles.headerButton}>SAVE</Text> */}
				</TouchableOpacity>
			</View>

			<View style={styles.cardTypeContainer}>
				<Text style={styles.cardTypeTitle}>Ways to generate cards</Text>

				<View style={styles.cardPreview}>
					<View style={styles.card}>
						<Text style={styles.cardText}>Generate Cards</Text>
						<Text style={styles.cardSubText}>
							Automatically generate cards from texts or photos of class notes,
							lecture slides and more...
						</Text>
					</View>
					<View style={styles.card}>
						<Text style={styles.cardText}>Generate Cards</Text>
						<Text style={styles.cardSubText}>
							Generate Cards by manually entering the content.
						</Text>
					</View>
				</View>
				<Text style={styles.cardDescription}>
					For cards with rich formatting, such as inline images, lists, and text
					styling.
				</Text>
			</View>

			{/* Add more card types here */}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#e0e0e0",
	},
	headerButton: {
		fontSize: 16,
		color: "#007AFF",
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: "bold",
	},
	form: {
		padding: 16,
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: "#e0e0e0",
		fontSize: 16,
		paddingVertical: 8,
		marginBottom: 16,
	},
	label: {
		fontSize: 16,
		marginBottom: 16,
	},
	cardTypeContainer: {
		paddingHorizontal: 5,
		borderTopWidth: 1,
		borderTopColor: "#e0e0e0",
	},
	cardTypeTitle: {
		fontSize: 18,
		fontWeight: "semibold",
		marginBottom: 20,
		textAlign: "center",
	},
	cardPreview: {
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 16,
		gap: 20,
	},
	card: {
		width: "90%",
		height: 200,
		// aspectRatio: 0.7,
		backgroundColor: "#f0f0f0",
		borderRadius: 5,
		padding: 20,
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		gap: 10,
	},
	cardText: {
		textAlign: "center",
		marginBottom: 8,
		color: "skyblue",
		fontSize: 25,
	},
	cardSubText: {
		textAlign: "center",
		marginBottom: 8,
		fontSize: 15,
	},
	cardDescription: {
		fontSize: 14,
		color: "#666",
	},
});

export default GenerateCardsScreen;
