import { StyleSheet } from "react-native";

import {
	widthPercentageToDP as WP,
	heightPercentageToDP as Hp,
} from "react-native-responsive-screen";

export const onboardingStyles = StyleSheet.create({
	firstContainer: {
		alignItems: "center",
		marginTop: "50%",
	},
	logo: {
		width: WP("23%"),
		height: Hp("10%"),
	},
	titleWrapper: {
		flexDirection: "row",
	},
	buttonWrapper: {
		backgroundColor: "blue",
		width: WP("92%"),
		paddingVertical: 20,
		paddingHorizontal: "auto",
		height: "auto",
		borderRadius: 20,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		fontSize: 30,
	},
});
