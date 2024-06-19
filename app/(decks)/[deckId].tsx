import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { RouteProp } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";
import { DeckType } from "@/data";
import { useLocalSearchParams } from "expo-router";

type StudyScreenProps = {
	route: RouteProp<{ params: { id: DeckType } }, "params">;
	// navigation: StackNavigationProp<any, any>;
};

const StudyScreen = ({ segment }: any) => {
	const { id } = useLocalSearchParams();
	console.log("route", id);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Deck Study</Text>
			{/* <Text style={styles.title}>{deck.title}</Text>
			<FlatList
				data={deck.sets}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<View style={styles.card}>
						<Text style={styles.question}>{item.question}</Text>
						<Text style={styles.answer}>{item.answer}</Text>
					</View>
				)}
			/> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	card: {
		padding: 15,
		backgroundColor: "#fff",
		marginVertical: 10,
		borderRadius: 10,
		elevation: 3,
	},
	question: {
		fontSize: 18,
		fontWeight: "bold",
	},
	answer: {
		fontSize: 16,
		marginTop: 10,
	},
});

export default StudyScreen;
