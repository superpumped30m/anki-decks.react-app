import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link, Stack, router } from "expo-router";
import { Pressable, TouchableOpacity } from "react-native";
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
						drawerLabel: "Card",
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

				<Stack.Screen
					name="(modals)/set/[id]"
					options={{
						presentation: "modal",
						title: "",
						headerLeft: () => (
							<TouchableOpacity onPress={() => router.back()}>
								<Ionicons name="close-outline" size={24} color="#fff" />
							</TouchableOpacity>
						),
					}}
				/>
				<Stack.Screen
					name="(modals)/set/create"
					options={{
						presentation: "modal",
						title: "Create Card Set",
						headerLeft: () => (
							<TouchableOpacity onPress={() => router.back()}>
								<Ionicons name="close-outline" size={24} color="#fff" />
							</TouchableOpacity>
						),
					}}
				/>

				<Stack.Screen
					name="(modals)/(cards)/[id]"
					options={{
						presentation: "modal",
						title: "Update Set Cards",
						headerLeft: () => (
							<TouchableOpacity onPress={() => router.back()}>
								<Ionicons name="close-outline" size={24} color="#fff" />
							</TouchableOpacity>
						),
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}
