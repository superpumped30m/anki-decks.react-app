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

const CONTENT = [
	{
		isExpanded: false,
		category_name: "Item 1",
		subcategory: [
			{ id: 1, value: "sub 1" },
			{ id: 2, value: "sub 2" },
		],
	},
	{
		isExpanded: false,
		category_name: "Item 2",
		subcategory: [
			{ id: 1, value: "sub 3" },
			{ id: 2, value: "sub 4" },
		],
	},
	{
		isExpanded: false,
		category_name: "Item 3",
		subcategory: [
			{ id: 1, value: "sub 5" },
			{ id: 2, value: "sub 6" },
		],
	},
	{
		isExpanded: false,
		category_name: "Item 4",
		subcategory: [
			{ id: 1, value: "sub 7" },
			{ id: 2, value: "sub 8" },
		],
	},
];

interface ExpandableComponentProps {
	isExpanded: boolean;
	category_name: string;
	subcategory: {
		id: number;
		value: string;
	}[];
	onClickFunction: Function;
}
const ExpandableComponent = ({
	isExpanded,
	category_name,
	subcategory,
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
				<Text style={styles.itemText}>{category_name}</Text>
			</TouchableOpacity>
			<View style={{ height: layoutHeight, overflow: "hidden" }}>
				{subcategory.map((item, key) => (
					<TouchableOpacity key={key} style={styles.content}>
						<Text style={styles.text}>
							{key} . {item.value}
						</Text>
						<View style={styles.separator} />
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

export default function ExpandableListView() {
	const [multiSelect, setMultiSelect] = useState<boolean>(true);
	const [listDataSource, setListDataSource] = useState(CONTENT);
	const updateLayout = (index: number) => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		const array = [...listDataSource];
		if (multiSelect) {
			array[index]["isExpanded"] = !array[index]["isExpanded"];
		} else {
			array.map((val, placeindex) =>
				placeindex === index
					? (array[placeindex]["isExpanded"] = !array[placeindex]["isExpanded"])
					: (array[placeindex]["isExpanded"] = false)
			);
		}
		setListDataSource(array);
	};
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.titleText}>ExpandableListView</Text>
				</View>
				<TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
					<Text style={styles.headerButton}>
						{multiSelect
							? "Enable Single \n Expand"
							: "Enable Multiple \n Expand"}
					</Text>
				</TouchableOpacity>
			</View>
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
		backgroundColor: "orange",
		padding: 20,
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
	separator: {
		height: 0.5,
		backgroundColor: "#c8c8c8",
	},
});
