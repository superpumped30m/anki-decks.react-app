import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleDeckModalVisibility } from "@/store/uiSlice";
import React from "react";
import {
	Alert,
	StyleSheet,
	Text,
	Pressable,
	View,
	useWindowDimensions,
} from "react-native";
import Modal from "react-native-modal";

const DeckModal = ({ children }: { children: React.ReactNode }) => {
	const { deckModalVisible } = useAppSelector((state) => state.ui);
	const dispatch = useAppDispatch();
	const { height, width } = useWindowDimensions();
	return (
		<View
			style={{
				// width: "90%",
				// height: "60%",
				// borderRadius: 25,
				// backgroundColor: "green",
				backgroundColor: "green",
				// width: "auto",
				// height:"auto",
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Modal
				animationIn={"slideInUp"}
				avoidKeyboard
				coverScreen
				// hasBackdrop={false}
				isVisible={deckModalVisible}
				// backdropOpacity={0.7}
				// deviceHeight={height}
				// deviceWidth={width}
				backdropColor="white"

			>
				{children}
			</Modal>
		</View>
	);
};

export default DeckModal;
const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});
