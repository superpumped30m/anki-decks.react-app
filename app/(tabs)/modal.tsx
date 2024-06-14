import {
	Modal,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DeckModalForm() {
	const [text, onChangeText] = React.useState("Useless Text");
	const [number, onChangeNumber] = React.useState("");
	return (
		<Modal visible transparent>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "rgba(0,0,0,0.5)",
				}}
			>
				<View
					style={{
						width: "90%",
						padding: 20,
						backgroundColor: "white",
						borderRadius: 20,
					}}
				>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "600",
							marginBottom: 12,
						}}
					>
						Create Deck
					</Text>
					<TextInput
						style={styles.input}
						onChangeText={onChangeNumber}
						value={number}
						placeholder="Enter Deck Name..."
						keyboardType="numeric"
					/>
					{/* <Text
						style={{
							fontSize: 16,
							lineHeight: 24,
							// opacity: 0.7,
						}}
					>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Consectetur eius cupiditate quaerat a, fugiat assumenda quo quasi
						laboriosam, repellendus repellat at deleniti quam aut quod! Ullam
						facilis nobis magnam! Ex.
					</Text> */}
					<TouchableOpacity
						style={[
							styles.button,
							{
								width: "100%",
								marginTop: 20,
								backgroundColor: "rgba(0,0,0,0.1)",
							},
						]}
					>
						<Text style={styles.buttonText}>Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: StatusBar.currentHeight || 0,
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
	},
	buttonText: {
		textAlign: "center",
	},
	input: {
		height: 55,
		borderWidth: 1,
		paddingHorizontal: 20,
		borderRadius: 14,
		fontSize: 18,
	},
});
