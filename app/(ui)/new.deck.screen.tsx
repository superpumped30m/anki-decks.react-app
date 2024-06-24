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

const NewDeckScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity>
					<Text style={styles.headerButton}>CLOSE</Text>
				</TouchableOpacity>
				<Text style={styles.headerTitle}>New Deck</Text>
				<TouchableOpacity>
					<Text style={styles.headerButton}>SAVE</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.form}>
				<TextInput style={styles.input} placeholder="Name" value="My Deck" />
				<TextInput style={styles.input} placeholder="Description (Optional)" />
				<Text style={styles.label}>Folder</Text>
				<Text style={styles.label}>Type</Text>
			</View>

			<View style={styles.cardTypeContainer}>
				<Text style={styles.cardTypeTitle}>Standard</Text>
				<View style={styles.cardPreview}>
					<View style={styles.card}>
						<Text style={styles.cardText}>FRONT SIDE</Text>
						<Text style={styles.cardText}>Main points</Text>
					</View>
					<View style={styles.card}>
						<Text style={styles.cardText}>BACK SIDE</Text>
						<Text style={styles.cardText}>Main points</Text>
						<Text style={styles.cardText}>• ABC</Text>
						<Text style={styles.cardText}>• 123</Text>
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
		padding: 16,
		borderTopWidth: 1,
		borderTopColor: "#e0e0e0",
	},
	cardTypeTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 16,
	},
	cardPreview: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 16,
	},
	card: {
		width: "48%",
		aspectRatio: 0.7,
		backgroundColor: "#f0f0f0",
		borderRadius: 8,
		padding: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	cardText: {
		textAlign: "center",
		marginBottom: 8,
	},
	cardDescription: {
		fontSize: 14,
		color: "#666",
	},
});

export default NewDeckScreen;
