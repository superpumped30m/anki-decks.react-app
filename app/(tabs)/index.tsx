import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import FloatingMenu from "@/components/ui/floating-menu";

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Tab One</Text>
				<View
					style={styles.separator}
					lightColor="#eee"
					darkColor="rgba(255,255,255,0.1)"
				/>
				<EditScreenInfo path="app/(tabs)/index.tsx" />
			</View>
			<Text style={styles.title}>No Decks Available</Text>
            <FloatingMenu />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
