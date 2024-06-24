import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { FloatingMenu } from "react-native-floating-action-menu";
import { ItemConfig } from "react-native-floating-action-menu/dist/src/types";
import DeckModalForm from "./deck-modal-form";

type ItemType = ItemConfig & { icon: string };

const items: ItemType[] = [
	{
		label: "Add",
		onPress: (item, index) => {
			router.push("/(decks)/create");
		},
		icon: "add-outline",
	},
	{
		label: "Add Deck",
		onPress: (item, index) => {
			router.push("/(decks)/new-deck");
		},
		icon: "create-outline",
	},
	{
		label: "Create Filtered Deck",
		onPress: (item, index) => {
			router.push("/create-filtered-deck");
		},
		icon: "filter-sharp",
	},
	{
		label: "View Card",
		onPress: (item, index) => {
			router.push("/(decks)");
		},
		icon: "caret-down-circle-outline",
	},
];

const renderItemIcon = (item: any, index: any, menuState: any) => {
	const { itemsDown } = menuState;
	const isItemPressed = itemsDown[index];
	const color = isItemPressed ? "#fff" : "#09f";
	// @ts-ignore
	return <Ionicons name={`${item.icon}`} size={30} color={color} />;
};

export default () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<>
			<DeckModalForm visible={visible} setVisible={setVisible} />
			<FloatingMenu
				position="bottom-right"
				openEase={() => {}}
				closeEase={() => {}}
				primaryColor="black"
				renderItemIcon={renderItemIcon}
				items={items}
				isOpen={isMenuOpen}
				onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
				// onItemPress={({ label }, idx) => router.push(`/${label}`)}
				renderMenuIcon={() => <Ionicons name="add-sharp" size={30} />}
			/>
		</>
	);
};
