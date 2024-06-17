import {
	Button,
	Pressable,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useState } from "react";

type CardResponseNavigatorProps = {
	showAnswer?: boolean;
	setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
};
const CardResponseNavigator = ({
	setShowAnswer,
	showAnswer,
}: CardResponseNavigatorProps) => {
	const handleUserAnswer = () => {
		setShowAnswer(true);
		console.log("show answer");
	};
	return (
		<View>
			<Pressable>
				<Button onPress={() => handleUserAnswer()} title="Show Answer" />
			</Pressable>
		</View>
	);
};

const AnswerSheet = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "spacegray",
				borderRadius: 25,
				paddingHorizontal: 20,
			}}
		>
			<Text style={styles.title}>
				MERN Stack stands for Mongo DB, Express Js, React Js and Node Js.
			</Text>
		</View>
	);
};

export default function CardScreen() {
	const [showAnswer, setShowAnswer] = useState<boolean>(false);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>What does MERN Stack stand for ?</Text>
			<View
				style={[
					styles.separator,
					{ borderColor: "black", backgroundColor: "gray" },
				]}
			/>
			{showAnswer ? <AnswerSheet /> : <View></View>}
			{showAnswer ? (
				<Text style={styles.title}>provide response</Text>
			) : (
				<CardResponseNavigator setShowAnswer={setShowAnswer} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: StatusBar.currentHeight ? StatusBar.currentHeight - 20 : 0,
		justifyContent: "space-between",
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
});
