import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
const _layout = () => {
	return (
		<Stack
			screenOptions={{
				title: "New Deck",
				headerBackButtonMenuEnabled: true,
				headerLeft: ({ tintColor }) => (
					<Ionicons name="chevron-back" size={25} color={tintColor} />
				),
				headerRight: ({ tintColor }) => (
					<Ionicons name="save-outline" size={25} color={tintColor} />
				),
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
		/>
	);
};

export default _layout;
