import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Card({
	children,
	title,
}: {
	title: string;
	children: React.JSX.Element;
}) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.separator} />
			<View style={styles.childLayout}>{children}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "space-between",
		backgroundColor: "white",
		// marginHorizontal: 10,
		marginVertical: 5,
		padding: 20,
        height:"auto",
        width: "auto"
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		lineHeight: 25,
	},
	separator: {
		marginVertical: 10,
		height: 1,
		width: "100%",
		borderColor: "lightgray",
		borderBottomWidth: 1,
		alignSelf: "center",
	},
    childLayout: {
        // flex: 1,
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        gap: 5,
        width: "auto"
    }
});
