import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	Pressable,
} from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import FloatingMenu from "@/components/ui/floating-menu";
import DeckModal from "@/components/ui/deck-modal";
import { useState } from "react";
import { Link } from "expo-router";

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
			<FlatList
				data={DATA}
				renderItem={({ item }) => <Item title={item.title} />}
				keyExtractor={(item) => item.id}
			/>
			{/* <Link href="/modal">Present modal</Link> */}
			<Text style={[styles.title, { alignSelf: "center" }]}>
				No Decks Available
			</Text>
			<FloatingMenu />
			{/* <DeckModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/> */}
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
});
