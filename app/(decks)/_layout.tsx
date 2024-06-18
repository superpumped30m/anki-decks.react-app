import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
	return (
		<Stack
			screenOptions={{
				title: "React Native Card",
				headerTitleAlign: "center",
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen name="create" />
		</Stack>
	);
};

export default _layout;
