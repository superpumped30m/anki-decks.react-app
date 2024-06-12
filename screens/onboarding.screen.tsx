import React from "react";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { onboardingStyles } from "@/styles/onboarding.styles";
import { router } from "expo-router";

export default function OnBoardingScreen() {
	const [fontsLoaded, fontError] = useFonts({
		Raleway_700Bold,
		Nunito_400Regular,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	// const router = useR
	return (
		<LinearGradient
			colors={["#E5E6E9", "#F6F7F9"]}
			style={{
				height: "100%",
				flex: 1,
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<View
				style={{
					width: "auto",
					height: "100%",
					flex: 1,
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<View style={onboardingStyles.firstContainer}>
					<Image source={require("@/assets/images/favicon.png")} />
				</View>
				<Button title="Hello" />
				<TouchableOpacity
					style={onboardingStyles.buttonWrapper}
					onPress={() => router.push("/(routes)/welcome-intro")}
				>
					<Text
						style={[
							onboardingStyles.buttonText,
							{ fontFamily: "Nunito_400Regular" },
						]}
					>
						Getting Started
					</Text>
				</TouchableOpacity>
			</View>
		</LinearGradient>
	);
}
