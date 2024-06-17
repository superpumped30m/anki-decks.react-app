import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme.web";

export default function Layout() {
	const colorScheme = useColorScheme();
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
				<Drawer.Screen
					name="(deck)/card/index" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "Settings",
						title: "Settings",
						drawerIcon: ({ size, color }) => (
							<Ionicons
								name="document-attach-sharp"
								size={size}
								color={color}
							/>
						),
						headerRight: () => (
							<Link href="/modal" asChild>
								<Pressable>
									{({ pressed }) => (
										<FontAwesome
											name="info-circle"
											size={25}
											// @ts-ignore
											color={Colors[colorScheme ?? "light"].text}
											style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
										/>
									)}
								</Pressable>
							</Link>
						),
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}
