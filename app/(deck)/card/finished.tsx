import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FinishedDeckScreen() {
	return (
		<View>
			<Text>Congratulations! You have finished this deck for now.</Text>
			<Text>
				If you wish to study outside of the regular schedule, you can use custom
				study feature.
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
