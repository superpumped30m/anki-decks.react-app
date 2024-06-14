import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer>
				<Drawer.Screen
					name="(tabs)"
					options={{
						drawerLabel: "Home",
						title: "Anki Decks React",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="list-sharp" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="statistics"
					options={{
						drawerLabel: "Statistics",
						title: "Statistics",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="bar-chart" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="settings" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "Settings",
						title: "Settings",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="settings" size={size} color={color} />
						),
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}
