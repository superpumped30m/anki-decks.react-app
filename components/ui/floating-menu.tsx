import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FloatingMenu } from "react-native-floating-action-menu";

const CardsMenu = () => {
	const items = [
		{ label: "Get Shared Decks" },
		{ label: "Create filtered Deck" },
		{ label: "Create Deck" },
		{ label: "Add" },
	];
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<FloatingMenu
			items={items}
			isOpen={isMenuOpen}
			onMenuToggle={() => {
				setIsMenuOpen(!isMenuOpen);
			}}
			onItemPress={() => console.log}
			position="bottom-right"
			primaryColor="lightblue"
			borderColor="gray"
			bottom={10}
			openEase={() => {}}
			closeEase={() => {}}
		/>
	);
};

export default CardsMenu;

const styles = StyleSheet.create({});
