import {
	Button,
	Pressable,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useState } from "react";

type AnswerButtonProps = {
	showAnswer?: boolean;
	setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
};
const AnswerButton = ({ setShowAnswer, showAnswer }: AnswerButtonProps) => {
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

const ResponseButton = () => {
	const handleUserResponse = () => {
		console.log("show answer");
	};
	return (
		<View style={styles.responseButtonContainer}>
			<View style={[styles.responseButtonView]}>
				<Text style={styles.responseButtonText}>A</Text>
			</View>
			<View style={styles.responseButtonView}>
				<Text style={styles.responseButtonText}>B</Text>
			</View>
			<View style={styles.responseButtonView}>
				<Text style={styles.responseButtonText}>C</Text>
			</View>
			<View style={styles.responseButtonView}>
				<Text style={styles.responseButtonText}>D</Text>
			</View>
		</View>
	);
};

export default function CardScreen() {
	const [showAnswer, setShowAnswer] = useState<boolean>(false);
	return (
		<View style={styles.container}>
			<View style={{}}>
				<Text style={styles.title}>What does MERN Stack stand for ?</Text>
				<View
					style={[
						styles.separator,
						{ borderColor: "black", backgroundColor: "gray" },
					]}
				/>

				{showAnswer ? <AnswerSheet /> : <View></View>}
			</View>

			<View style={{ width: "auto" }}>
				<ResponseButton />
				<AnswerButton setShowAnswer={setShowAnswer} />
			</View>
		</View>
	);
}

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
