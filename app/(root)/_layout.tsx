import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer>
				<Drawer.Screen
					name="index"
					options={{
						headerShown: true,
						headerTitle: "Anki Decks React",
						drawerLabel: "Home",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="list-sharp" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="statistics/index"
					options={{
						drawerLabel: "Statistics",
						title: "Statistics",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="bar-chart" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="settings/index" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "Settings",
						title: "Settings",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="settings" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="modal"
					options={{
						drawerItemStyle: { display: "none" },
						drawerLabel: "Deck Card",
						title: "Create Deck",
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}
