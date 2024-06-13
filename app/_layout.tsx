import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { Drawer } from "expo-router/drawer";

import { Image, SafeAreaView, View } from "react-native";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Drawer
					screenOptions={{
						drawerPosition: "left",
						drawerType: "front",
						drawerStyle: {
							backgroundColor: "white", // #021520
							width: 250,
						},
						headerShown: true,
						drawerInactiveTintColor: "#021520",
						drawerLabelStyle: {
							color: "black",
						},
					}}
				>
					<Drawer.Screen
						name="index"
						options={{
							drawerLabel: "Decks",
							drawerIcon: () => (
								<Image
									source={require("@/assets/images/favicon.png")}
									resizeMode="contain"
									style={{
										width: 24,
										height: 24,
										tintColor: "white",
										backgroundColor: "black",
										padding: "auto",
									}}
								/>
							),
						}}
					/>
					<Drawer.Screen
						name="statistics"
						options={{
							drawerLabel: "Statistics",
							drawerIcon: () => (
								<Image
									source={require("@/assets/images/favicon.png")}
									resizeMode="contain"
									style={{
										width: 24,
										height: 24,
										tintColor: "white",
									}}
								/>
							),
						}}
					/>
					<Drawer.Screen
						name="settings"
						options={{
							drawerLabel: "Settings",
							drawerIcon: () => (
								<Image
									source={require("@/assets/images/favicon.png")}
									resizeMode="contain"
									style={{
										width: 24,
										height: 24,
										tintColor: "white",
										backgroundColor: "black",
										padding: "auto",
									}}
								/>
							),
						}}
					/>
				</Drawer>
			</GestureHandlerRootView>
		</>
	);
}
