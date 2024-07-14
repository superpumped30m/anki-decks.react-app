import { View } from "../Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LayoutAnimation, Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { router } from "expo-router";

type DeckViewExpandableProps = {
	name: string;
	newToday: [number, number];
	revToday: [number, number];
	lrnToday: [number, number];
	timeToday: [number, number];
	conf: number;
	usn: number;
	desc: string;
	dyn: number;
	collapsed: boolean;
	extendNew: number;
	extendRev: number;
} & { id: string };

const DeckViewExpandable = ({
	id,
	name,
	desc,
	newToday,
	revToday,
	lrnToday,
	timeToday,
	conf,
	usn,
	dyn,
	collapsed,
	extendNew,
	extendRev,
}: DeckViewExpandableProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handlePress = (id?: number) => {
		router.navigate({
			pathname: "/(decks)/[deckId]",
			params: {
				id: id,
			},
		});
	};

	const handleChevronPress = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setIsExpanded(!isExpanded);
	};

	return (
		<View>
			<TouchableOpacity style={[styles.item, { height: 60 }]}>
				<TouchableOpacity
					style={{ paddingHorizontal: 10 }}
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
				<Pressable
					style={{ paddingVertical: 20 }}
                    // @ts-ignore
					onPress={() => handlePress(id)}
				>
					<Text style={styles.itemText}>{name}</Text>
				</Pressable>
			</TouchableOpacity>

			<View style={styles.deckSeparator} />

			{isExpanded && (
				<View style={{ paddingLeft: 15 }}>
					<Text style={styles.text}>Description: {desc}</Text>
					<Text style={styles.text}>New Today: {newToday}</Text>
					<Text style={styles.text}>Review Today: {revToday}</Text>
					<Text style={styles.text}>Learn Today: {lrnToday}</Text>
					<Text style={styles.text}>Time Today: {timeToday}</Text>
					<Text style={styles.text}>Conf: {conf}</Text>
					<Text style={styles.text}>USN: {usn}</Text>
					<Text style={styles.text}>Dynamic: {dyn}</Text>
					<Text style={styles.text}>Collapsed: {collapsed ? "Yes" : "No"}</Text>
					<Text style={styles.text}>Extend New: {extendNew}</Text>
					<Text style={styles.text}>Extend Review: {extendRev}</Text>
				</View>
			)}
		</View>
	);
};

export default DeckViewExpandable;

const styles = StyleSheet.create({
	item: {
		backgroundColor: "white",
		paddingHorizontal: 10,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	itemText: {
		fontSize: 16,
		fontWeight: "500",
	},
	deckSeparator: {
		height: 0.5,
		backgroundColor: "#c8c8c8",
	},
	text: {
		fontSize: 14,
	},
});
