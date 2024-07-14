import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ToastAndroid,
	Switch,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { defaultStyleSheet } from "@/constants/Styles";
import { useSQLiteContext } from "expo-sqlite";

type DeckInformationType = {
	name: string;
	newToday: [number, number];
	revToday: [number, number];
	lrnToday: [number, number];
	timeToday: [number, number];
	conf: number;
	usn: number;
	desc: string;
	dyn: number;
	collapsed: boolean;
	extendNew: number;
	extendRev: number;
};

export default function CreateDeckScreen() {
	const db = useSQLiteContext();
	const [deckInformation, setDeckInformation] = useState<DeckInformationType>({
		name: "",
		newToday: [0, 0],
		revToday: [0, 0],
		lrnToday: [0, 0],
		timeToday: [0, 0],
		conf: 1,
		usn: 0,
		desc: "",
		dyn: 0,
		collapsed: false,
		extendNew: 10,
		extendRev: 50,
	});

	const [isFocus, setIsFocus] = useState<boolean>(false);

	const onCreateDeck = async () => {
		if (!deckInformation.name || !deckInformation.desc) {
			showValidationToast();
			return;
		}

		try {
			await db.withTransactionAsync(async () => {
				db.runAsync(
					"INSERT INTO decks (name, newToday, revToday, lrnToday, timeToday, conf, usn, desc, dyn, collapsed, extendNew, extendRev) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
					[
						deckInformation.name,
						JSON.stringify(deckInformation.newToday),
						JSON.stringify(deckInformation.revToday),
						JSON.stringify(deckInformation.lrnToday),
						JSON.stringify(deckInformation.timeToday),
						deckInformation.conf,
						deckInformation.usn,
						deckInformation.desc,
						deckInformation.dyn,
						deckInformation.collapsed ? 1 : 0,
						deckInformation.extendNew,
						deckInformation.extendRev,
					]
				);
			});

			showSuccessToast();
			setDeckInformation({
				name: "",
				newToday: [0, 0],
				revToday: [0, 0],
				lrnToday: [0, 0],
				timeToday: [0, 0],
				conf: 1,
				usn: 0,
				desc: "",
				dyn: 0,
				collapsed: false,
				extendNew: 10,
				extendRev: 50,
			});
		} catch (error) {
			console.error("Error creating deck:", error);
		}
	};

	const showValidationToast = () => {
		ToastAndroid.show("Please fill required fields", ToastAndroid.SHORT);
	};
	const showSuccessToast = () => {
		ToastAndroid.show("Deck created Successfully", ToastAndroid.SHORT);
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
					placeholder="Deck Name..."
					value={deckInformation.name}
					onChangeText={(text) =>
						setDeckInformation({ ...deckInformation, name: text })
					}
				/>
				<TextInput
					style={defaultStyleSheet.input}
					placeholder="Description..."
					value={deckInformation.desc}
					onChangeText={(text) =>
						setDeckInformation({ ...deckInformation, desc: text })
					}
				/>
				<View style={dropdownStyles.container}>
					<Dropdown
						style={[
							dropdownStyles.dropdown,
							defaultStyleSheet.input,
							isFocus && { borderColor: "blue" },
						]}
						placeholderStyle={dropdownStyles.placeholderStyle}
						selectedTextStyle={dropdownStyles.selectedTextStyle}
						inputSearchStyle={dropdownStyles.inputSearchStyle}
						iconStyle={dropdownStyles.iconStyle}
						data={[
							{ label: "Dynamic", value: 1 },
							{ label: "Regular", value: 0 },
						]}
						labelField="label"
						valueField="value"
						placeholder={!isFocus ? "Select Type" : "..."}
						searchPlaceholder="Search..."
						value={deckInformation.dyn.toString()}
						onFocus={() => setIsFocus(true)}
						onBlur={() => setIsFocus(false)}
						onChange={(item) => {
							setDeckInformation({ ...deckInformation, dyn: item.value });
							setIsFocus(false);
						}}
						renderLeftIcon={() => (
							<Ionicons
								style={dropdownStyles.icon}
								color={isFocus ? "blue" : "black"}
								name="logo-dropbox"
								size={20}
							/>
						)}
					/>
				</View>
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
							setDeckInformation({ ...deckInformation, collapsed: value })
						}
						value={deckInformation.collapsed}
					/>
					<Text style={{ marginLeft: 8 }}>Collapsed</Text>
				</View>
				<TextInput
					style={defaultStyleSheet.input}
					placeholder="Extend New..."
					keyboardType="numeric"
					value={deckInformation.extendNew.toString()}
					onChangeText={(text) =>
						setDeckInformation({ ...deckInformation, extendNew: Number(text) })
					}
				/>
				<TextInput
					style={defaultStyleSheet.input}
					placeholder="Extend Rev..."
					keyboardType="numeric"
					value={deckInformation.extendRev.toString()}
					onChangeText={(text) =>
						setDeckInformation({ ...deckInformation, extendRev: Number(text) })
					}
				/>
			</View>
			<View style={{ alignItems: "center" }}>
				<TouchableOpacity
					style={defaultStyleSheet.bottomButton}
					onPress={onCreateDeck}
				>
					<Text style={defaultStyleSheet.buttonText}>Create Deck</Text>
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

const dropdownStyles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 16,
	},
	dropdown: {
		height: 50,
		borderColor: "gray",
		borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
	},
	icon: {
		marginRight: 5,
	},
	label: {
		position: "absolute",
		backgroundColor: "white",
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 14,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 16,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
});
