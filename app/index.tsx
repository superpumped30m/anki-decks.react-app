import { StyleSheet, View } from "react-native";
import { SecondaryText } from "@/components/text";
import CardsMenu from "@/components/ui/floating-menu";

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<CardsMenu />
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 35,
		alignItems: "center",
		// backgroundColor: "green",
	},
});
