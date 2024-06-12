import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ReusableButton from "@/components/button";
import { PrimaryText, SecondaryText } from "@/components/text";

const HomeScreen = () => {
	const nav = useNavigation();
	return (
		<View style={styles.container}>
			<PrimaryText>Join Us to Kick Start Your Learning</PrimaryText>
			<SecondaryText>
				Join and Learn from our AI Generated Instructions
			</SecondaryText>
			<ReusableButton
				buttonStyle={{ backgroundColor: "black" }} // Custom button style
				textStyle={{ color: "white" }} // Custom text style
				buttonText="Sign In"
				onPress={() => nav.navigate("Signin")}
				containerStyle={{ marginTop: 50 }}
			/>
			<ReusableButton
				buttonStyle={{ backgroundColor: "white" }} // Custom button style
				textStyle={{ color: "black" }} // Custom text style
				buttonText="Sign Up"
				onPress={() => nav.navigate("Signup")}
				containerStyle={{ marginTop: 10 }}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 35,
		alignItems: "center",
	},
});
