import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Switch,
	Image,
	ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { defaultStyleSheet } from "@/constants/Styles";
import { TextInput } from "react-native-gesture-handler";
import { addToFavorites, createSet } from "@/data/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateScreen() {
	const [information, setInformation] = useState({
		question: "",
		answer: "",
		favorite: true,
		image: null as any,
	});

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			base64: true,
			aspect: [4, 3],
			quality: 0.5,
		});

		if (!result.canceled) {
			setInformation({ ...information, image: result.assets[0].base64 });
		}
	};

	// Create set, add new favorite and go back
	const onCreateSet = async () => {
		if (!information.question || !information.answer) {
			showValidationToast();
			return;
		}
		AsyncStorage.setItem("SETS", JSON.stringify(information), () => {
			console.log("data stored in local storage");
		});
		// console.log(AsyncStorage.getItem("SETS"));
		// const sets = await AsyncStorage.getItem("SETS");
		// console.log("sets", sets)
		console.log("SET Access KEY", await AsyncStorage.getAllKeys());
		// const newSet = await createSet(information);
		// await addToFavorites(newSet.id!);
		// router.back();
		// Notify upon success & reset the Set Form.

		showSuccessToast();
		setInformation({
			answer: "",
			question: "",
			favorite: false,
			image: null as any,
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
					placeholder="Question..."
					value={information.question}
					onChangeText={(text) => {
						console.log("text", text);
						setInformation({ ...information, question: text });
						console.log("information", information);
					}}
				/>
				<TextInput
					style={defaultStyleSheet.input}
					placeholder="Answer..."
					value={information.answer}
					onChangeText={(text) => {
						console.log("text", text);
						setInformation({ ...information, answer: text });
						console.log("information", information);
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

				<TouchableOpacity style={defaultStyleSheet.button} onPress={pickImage}>
					<Text style={defaultStyleSheet.buttonText}>Select Image</Text>
				</TouchableOpacity>

				{information.image && (
					<View style={{ marginTop: 16 }}>
						<Image
							source={{ uri: `data:image/jpeg;base64,${information.image}` }}
							style={{ width: "100%", height: 200 }}
						/>
					</View>
				)}
			</View>
			<View style={{ alignItems: "center" }}>
				<TouchableOpacity
					style={defaultStyleSheet.bottomButton}
					onPress={onCreateSet}
				>
					<Text style={defaultStyleSheet.buttonText}>Create Set</Text>
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
