import { DeckType } from "@/data";
import { View } from "../Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LayoutAnimation, Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAppDispatch } from "@/store/hooks";
import { toggleDeckExpand } from "@/store/deckSlice";
import { router } from "expo-router";

const ExpandableDeckView = ({
	id,
	title,
	sets,
	isExpanded,
	childrens,
}: DeckType) => {
	const dispatch = useAppDispatch();
	const hasChildren = childrens && childrens.length > 0;

	const handlePress = (id?: number) => {
		if (sets.length > 0) {
			// navigation.navigate("StudyScreen", { deckId: id });
			router.navigate({
				pathname: "/(decks)/[deckId]",
				params: {
					id: id,
				},
			});
		} else {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			dispatch(toggleDeckExpand(id));
		}
	};

	const handleChevronPress = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		dispatch(toggleDeckExpand(id));
	};

	return (
		<View>
			<TouchableOpacity style={[styles.item, { height: 60 }]}>
				{hasChildren ? (
					<TouchableOpacity
						style={{
							paddingHorizontal: 10,
						}}
						onPress={handleChevronPress}
					>
						{isExpanded ? (
							<Ionicons name="chevron-down-outline" size={20} color={"black"} />
						) : (
							<Ionicons
								name="chevron-forward-outline"
								size={20}
								color={"black"}
							/>
						)}
					</TouchableOpacity>
				) : (
					<Ionicons name="add-outline" size={20} color={"black"} />
				)}
				<Pressable
					style={{
						paddingVertical: 20,
					}}
					onPress={() => handlePress(id)}
				>
					<Text style={styles.itemText}>{title}</Text>
				</Pressable>
			</TouchableOpacity>

			<View style={styles.deckSeparator} />

			{isExpanded && hasChildren && (
				<View style={{ paddingLeft: 15 }}>
					{childrens.map((child, idx) => (
						<ExpandableDeckView {...child} key={idx} />
					))}
				</View>
			)}
		</View>
	);
};

export default ExpandableDeckView;

const styles = StyleSheet.create({
	item: {
		backgroundColor: "white",
		paddingHorizontal: 10,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	itemText: {
		fontSize: 16,
		fontWeight: "500",
	},
	deckSeparator: {
		height: 0.5,
		backgroundColor: "#c8c8c8",
	},
	content: {
		backgroundColor: "#f9f9f9",
		padding: 15,
		marginVertical: 5,
	},
	text: {
		fontSize: 14,
	},
	separator: {
		height: 0.5,
		backgroundColor: "#c8c8c8",
		marginVertical: 10,
	},
});
