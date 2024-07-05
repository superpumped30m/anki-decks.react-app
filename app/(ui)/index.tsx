import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
} from "react-native";

const HomeScreen = () => {
	const decks = [
		{ name: "YT", total: "1/1", new: 0, learning: 0, review: 0 },
		{ name: "I don't know", total: "0/0", new: 0, learning: 0, review: 0 },
		{ name: "test", total: "1/1", new: 0, learning: 0, review: 0 },
	];

	return (
		<View style={styles.container}>
			{/* <View style={styles.header}>
				<Text style={styles.logo}>Anki React</Text>
				<View style={styles.headerIcons}>
					<Ionicons name="search" size={24} color="#000" />
					<Ionicons
						name="menu"
						size={24}
						color="#000"
						style={styles.menuIcon}
					/>
				</View>
			</View> */}

			<ScrollView>
				<Text style={styles.title}>Today's List</Text>

				<View style={styles.statsContainer}>
					<View style={styles.statItem}>
						<Text style={styles.statNumber}>0</Text>
						<Text style={styles.statLabel}>New</Text>
					</View>
					<View style={styles.statItem}>
						<Text style={styles.statNumber}>0</Text>
						<Text style={styles.statLabel}>Reviews</Text>
					</View>
					<View style={styles.statItem}>
						<Text style={[styles.statNumber, styles.greyText]}>0</Text>
						<Text style={styles.statLabel}>Estimated(min)</Text>
					</View>
				</View>

				<Text style={styles.studiedText}>
					Studied 3 cards in 0 minutes today
				</Text>

				{decks.map((deck, index) => (
					<View key={index} style={styles.deckCard}>
						<View>
							<Text style={styles.deckName}>{deck.name}</Text>
							<Text style={styles.deckTotal}>Total: {deck.total}</Text>
							{deck.total !== "0/0" && <View style={styles.progressBar} />}
							<View style={styles.deckStats}>
								<Text style={styles.deckStatText}>New: {deck.new}</Text>
								<Text style={styles.deckStatText}>
									Learning: {deck.learning}
								</Text>
								<Text style={styles.deckStatText}>Review: {deck.review}</Text>
							</View>
						</View>
						<TouchableOpacity style={styles.studyButton}>
							<Text style={styles.studyButtonText}>Study</Text>
						</TouchableOpacity>
					</View>
				))}
			</ScrollView>

			<View style={styles.bottomNav}>
				<TouchableOpacity style={styles.navItem}>
					<Ionicons name="home" size={24} color="#00BFFF" />
					<Text style={[styles.navText, styles.activeNavText]}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.navItem}>
					<Ionicons name="cloud-download-outline" size={24} color="#000" />
					<Text style={styles.navText}>Set</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.navItem, styles.addButton]}>
					<Ionicons name="add" size={32} color="#FFF" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.navItem}>
					<Ionicons name="stats-chart-outline" size={24} color="#000" />
					<Text style={styles.navText}>Statistics</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.navItem}>
					<Ionicons name="settings-outline" size={24} color="#000" />
					<Text style={styles.navText}>Setting</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F5F5",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#FFF",
	},
	logo: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#00BFFF",
	},
	headerIcons: {
		flexDirection: "row",
	},
	menuIcon: {
		marginLeft: 16,
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		margin: 16,
	},
	statsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 16,
	},
	statItem: {
		alignItems: "center",
	},
	statNumber: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#00BFFF",
	},
	greyText: {
		color: "#808080",
	},
	statLabel: {
		fontSize: 14,
		color: "#808080",
	},
	studiedText: {
		textAlign: "center",
		marginBottom: 16,
		color: "#808080",
	},
	deckCard: {
		backgroundColor: "#FFF",
		borderRadius: 8,
		padding: 16,
		marginHorizontal: 16,
		marginBottom: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	deckName: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 8,
	},
	deckTotal: {
		fontSize: 14,
		color: "#808080",
		marginBottom: 8,
	},
	progressBar: {
		height: 4,
		backgroundColor: "#00BFFF",
		borderRadius: 2,
		marginBottom: 8,
	},
	deckStats: {
		flexDirection: "row",
	},
	deckStatText: {
		marginRight: 16,
		color: "#808080",
	},
	studyButton: {
		backgroundColor: "#00BFFF",
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 20,
	},
	studyButtonText: {
		color: "#FFF",
		fontWeight: "bold",
	},
	bottomNav: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "#FFF",
		paddingVertical: 8,
		borderTopWidth: 1,
		borderTopColor: "#E0E0E0",
	},
	navItem: {
		alignItems: "center",
	},
	navText: {
		fontSize: 12,
		marginTop: 4,
	},
	activeNavText: {
		color: "#00BFFF",
	},
	addButton: {
		backgroundColor: "#00BFFF",
		borderRadius: 30,
		width: 60,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20,
	},
});

export default HomeScreen;
