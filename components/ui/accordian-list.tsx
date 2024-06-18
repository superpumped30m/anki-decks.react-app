import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	GestureResponderEvent,
	LayoutAnimation,
} from "react-native";
import { useState, useEffect } from "react";
import { APPLICATION_DATA } from "@/data";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

interface ExpandableComponentProps {
	id: number;
	title: string;
	description: string;
	cards: {
		id: number;
		question: string;
		answer: string;
		image: string;
	}[];
	isExpanded: boolean;
	onClickFunction: Function;
}
const ExpandableComponent = ({
	isExpanded,
	title,
	cards,
	description,
	onClickFunction,
}: ExpandableComponentProps) => {
	const [layoutHeight, setLayoutHeight] = useState<number | null>(0);
	useEffect(() => {
		if (isExpanded) {
			setLayoutHeight(null);
		} else {
			setLayoutHeight(0);
		}
	}, [isExpanded]);
	return (
		<View>
			{/* @ts-ignore */}
			<TouchableOpacity style={styles.item} onPress={onClickFunction}>
				{isExpanded ? (
					<Ionicons name="chevron-down-outline" size={20} color={"black"} />
				) : (
					<Ionicons name="chevron-forward-outline" size={20} color={"black"} />
				)}
				<Link href="/(decks)" asChild>
					<Text style={[styles.itemText, { backgroundColor: "green" }]}>
						{title}
					</Text>
				</Link>
			</TouchableOpacity>
			<View style={styles.deckSeparator} />
			<View style={{ height: layoutHeight, overflow: "hidden" }}>
				{cards.map((item, key) => (
					<TouchableOpacity key={key} style={styles.content}>
						<Text style={styles.text}>
							{key} . {item.question}
						</Text>
						<View style={styles.separator} />
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

export default function AccordianList() {
	const [listDataSource, setListDataSource] = useState(APPLICATION_DATA);
	const updateLayout = (index: number) => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		const array = [...listDataSource];
		array[index]["isExpanded"] = !array[index]["isExpanded"];
		setListDataSource(array);
	};
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				{listDataSource.map((item, idx) => (
					<ExpandableComponent
						{...item}
						key={idx}
						onClickFunction={() => updateLayout(idx)}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

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
