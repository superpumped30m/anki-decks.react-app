import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	LayoutAnimation,
} from "react-native";

import { toggleDeckExpand } from "@/store/deckSlice";
import { Ionicons } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const ExpandableComponent = ({ id, title, sets, children, isExpanded }) => {
	const dispatch = useAppDispatch();

	const handlePress = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		dispatch(toggleDeckExpand(id));
	};

	return (
		<View>
			<TouchableOpacity style={styles.item} onPress={handlePress}>
				{isExpanded ? (
					<Ionicons name="chevron-down-outline" size={20} color={"black"} />
				) : (
					<Ionicons name="chevron-forward-outline" size={20} color={"black"} />
				)}
				<Text style={styles.itemText}>{title}</Text>
			</TouchableOpacity>
			<View style={styles.deckSeparator} />
			{isExpanded && (
				<View>
					{sets.map((item, key) => (
						<TouchableOpacity key={key} style={styles.content}>
							<Text style={styles.text}>
								{key + 1}. {item.question}
							</Text>
							<View style={styles.separator} />
						</TouchableOpacity>
					))}
					{children.map((child, key) => (
						<ExpandableComponent key={key} {...child} />
					))}
				</View>
			)}
		</View>
	);
};

const DecksList = () => {
    const decks = useAppSelector((state) => state.decks);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				{decks.map((item, idx) => (
					<ExpandableComponent key={idx} {...item} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default DecksList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flexDirection: "row",
		padding: 10,
	},
	headerButton: {
		textAlign: "center",
		justifyContent: "center",
		fontSize: 18,
	},
	titleText: {
		flex: 1,
		fontSize: 22,
		fontWeight: "bold",
	},
	item: {
		backgroundColor: "white",
		padding: 20,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	itemText: {
		fontSize: 16,
		fontWeight: "500",
	},
	content: {
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#fff",
	},
	text: {
		fontSize: 16,
		padding: 10,
	},
	deckSeparator: {
		height: 0.5,
		backgroundColor: "#c8c8c8",
	},
	separator: {
		height: 0.5,
		backgroundColor: "#c8c8c8",
		width: "95%",
		alignSelf: "center",
	},
});
