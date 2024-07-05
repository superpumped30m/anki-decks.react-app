import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
const _layout = () => {
	return (
		<Stack
			screenOptions={{
				header(props) {
					return (
						<View style={styles.header}>
							<Text style={styles.logo}>Anki React</Text>
							<View style={styles.headerIcons}>
								<Ionicons name="search" size={24} color="#000" />
								<Ionicons
									name="menu"
									size={24}
									color="#000"
									style={styles.menuIcon}
								/>
							</View>
						</View>
					);
				},
				headerShown: false,
				// headerLeft: ({ tintColor }) => (
				// 	<Ionicons name="chevron-back" size={25} color={tintColor} />
				// ),
				// headerRight: ({ tintColor }) => (
				// 	<Ionicons name="save-outline" size={25} color={tintColor} />
				// ),
				// headerTitle: ({ tintColor }) => (
				// 	<Ionicons name="file-tray-stacked" size={25} color={tintColor} />
				// ),
				// headerTitleStyle: {
				//     color: "Green",
				//     fontFamily: "robot",
				//     fontSize: 700,
				//     fontWeight: "600"
				// }
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					headerShown: true,
				}}
			/>
		</Stack>
	);
};

export default _layout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F5F5",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#FFF",
	},
	logo: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#00BFFF",
	},
	headerIcons: {
		flexDirection: "row",
	},
	menuIcon: {
		marginLeft: 16,
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		margin: 16,
	},
});
