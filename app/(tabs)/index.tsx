import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	Pressable,
	Modal,
} from "react-native";
import FloatingMenu from "@/components/ui/floating-menu";
import { useState } from "react";
import DeckModalForm from "./modal";
import { Link } from "expo-router";
import { APPLICATION_DATA } from "@/data";
import ExpandableListView from "@/components/ui/expandable-list-view";
import AccordianList from "@/components/ui/accordian-list";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "First Item",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Second Item",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
	},
];

type ItemProps = { title: string };
const Item = ({ title }: ItemProps) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);
export default function TabOneScreen() {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<SafeAreaView style={styles.container}>
			
			<AccordianList />
			<Link href="/(deck)/card">Present modal</Link>
			<Text style={[styles.title, { alignSelf: "center" }]}>
				No Decks Available
			</Text>
			<DeckModalForm />
			<FloatingMenu />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: StatusBar.currentHeight || 0,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	item: {
		backgroundColor: "lightgray",
		padding: 15,
		marginVertical: 1,
		marginHorizontal: 4,
		textAlign: "center",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	button: {
		borderRadius: 14,
		paddingVertical: 15,
		textAlign: "center",
		// justifyContent: "center",
	},
	buttonText: {
		textAlign: "center",
	},
});
