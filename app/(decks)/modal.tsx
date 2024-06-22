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
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function DeckModalForm() {
	const [number, onChangeNumber] = React.useState("");
	const onModalClose = () => {
        router.dismiss()
		// setVisible(false);
	};
	return (
		<Modal visible={true} transparent>
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
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 10,
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
						<TouchableOpacity
							style={{
								width: "auto",
								height: "auto",
								backgroundColor: "green",
							}}
							onPress={onModalClose}
						>
							<Ionicons
								size={35}
								onPress={onModalClose}
								name="close-circle-outline"
								color="red"
							/>
						</TouchableOpacity>
					</View>
					<TextInput
						style={styles.input}
						onChangeText={onChangeNumber}
						value={number}
						placeholder="Enter Deck Name..."
						keyboardType="numeric"
					/>
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
