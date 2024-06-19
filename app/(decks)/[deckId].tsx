import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	useWindowDimensions,
	TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useAppSelector } from "@/store/hooks";
import { SetType } from "@/data";
import { SafeAreaView } from "react-native";

const StudyScreen = () => {
	const { width } = useWindowDimensions();
	const { id } = useLocalSearchParams();
	const deckId = parseInt(id as string);

	const deck = useAppSelector((state) =>
		state.decks.find((deck) => deck.id === deckId)
	);

	if (!deck) {
		return (
			<View style={styles.container}>
				<Text style={styles.errorText}>Deck not found</Text>
			</View>
		);
	}

	const [currentIndex, setCurrentIndex] = useState(0);
	const [showAnswer, setShowAnswer] = useState(false);

	const handleNext = () => {
		setShowAnswer(false);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % deck.sets.length);
	};

	const handlePrevious = () => {
		setShowAnswer(false);
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? deck.sets.length - 1 : prevIndex - 1
		);
	};

	const handleToggleAnswer = () => {
		setShowAnswer(!showAnswer);
	};
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<View style={styles.scorePanel}>
				<Text style={{ color: "blue" }}>20</Text>
				<Text style={{ color: "red" }}>16</Text>
				<Text style={{ color: "green" }}>12</Text>
			</View>
			<View style={styles.container}>
				<FlatList
					data={deck.sets as SetType[]}
					keyExtractor={(_, idx) => idx.toString()}
					renderItem={({ item }: { item: SetType }) => {
						return (
							<View
								style={[
									styles.card,
									{ width: width, justifyContent: "space-between" },
								]}
							>
								<View>
									<Text style={styles.question}>{item.question}</Text>
									<View style={styles.separator} />
									{showAnswer && (
										<Text style={styles.answer}>{item.answer}</Text>
									)}
								</View>
							</View>
						);
					}}
					horizontal
					centerContent
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					scrollEnabled={false}
					getItemLayout={(data, index) => ({
						length: width,
						offset: width * index,
						index,
					})}
					initialScrollIndex={currentIndex}
					extraData={currentIndex}
					ref={(ref) => {
						if (ref) {
							ref.scrollToIndex({ index: currentIndex, animated: true });
						}
					}}
				/>
			</View>
			{showAnswer ? (
				<View style={styles.navigationPanel}>
					{/* <View> */}
					<TouchableOpacity onPress={handlePrevious}>
						<Text style={{ color: "red" }}>Again</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={handlePrevious}>
						<Text style={{ color: "darkgray" }}>Hard</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={handleNext}>
						<Text style={{ color: "green" }}>Good</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={handleNext}>
						<Text style={{ color: "blue" }}>Easy</Text>
					</TouchableOpacity>
					{/* </View> */}
				</View>
			) : (
				<TouchableOpacity
					style={[
						styles.navigationPanel,
						{
							paddingVertical: 0,
							backgroundColor: "yellow",
							height: 50,
							width: width,
						},
					]}
					onPress={handleToggleAnswer}
				>
					<Text style={[styles.buttonText]}>
						{showAnswer ? "Hide Answer" : "Show Answer"}
					</Text>
				</TouchableOpacity>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "darkgray",
	},
	scorePanel: {
		display: "flex",
		flexDirection: "row",
		gap: 10,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	navigationPanel: {
		height: "auto",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		paddingVertical: 20,
		backgroundColor: "yellow",
	},
	separator: {
		marginVertical: 20,
		height: 1,
		width: "95%",
		backgroundColor: "lightgray",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	card: {
		width: "auto",
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
		elevation: 0,
		paddingVertical: 20,
		paddingHorizontal: 20,
	},
	question: {
		fontSize: 18,
		fontWeight: "bold",
	},
	answer: {
		fontSize: 18,
		marginTop: 10,
		textAlign: "auto",
	},
	errorText: {
		fontSize: 18,
		color: "red",
		textAlign: "center",
		marginTop: 20,
	},
	buttonText: {
		color: "black",
		fontSize: 20,
		fontWeight: "600",
	},
});

export default StudyScreen;
