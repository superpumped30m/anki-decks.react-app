import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const _layout = () => {
	return (
		<GestureHandlerRootView>
			<Stack
				screenOptions={{
					title: "React Native Card",
					headerTitleAlign: "center",
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen
					name="create"
					options={{
						headerShown: true,
						headerBackVisible: true,
						headerTitle: "Add Set",
						headerRight: ({ tintColor }) => {
							return <Ionicons name="ellipsis-vertical" size={20} />;
						},
					}}
				/>
                <Stack.Screen
					name="new-deck"
					options={{
						headerShown: true,
						headerBackVisible: true,
						headerTitle: "Add Set",
						headerRight: ({ tintColor }) => {
							return <Ionicons name="ellipsis-vertical" size={20} />;
						},
					}}
				/>
				{/* <Stack.Screen name="study" options={{
                    
                }} /> */}
				<Stack.Screen
					options={{
						presentation: "containedModal",
					}}
					name="modal"
				/>
			</Stack>
		</GestureHandlerRootView>
	);
};

export default _layout;
