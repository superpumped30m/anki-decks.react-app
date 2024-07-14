import { SafeAreaView, ScrollView, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ExpandableDeckView from "./expandable-deck-view";
import { useEffect } from "react";
import { fetchAllDecks } from "@/store/ankiSlice";

const DecksList = () => {
	const decks = useAppSelector((state) => state.decks);
	const dispatch = useAppDispatch();
	// const { decks, status, error } = useAppSelector((state) => state.anki);

	useEffect(() => {
		dispatch(fetchAllDecks());
	}, [dispatch]);

	// if (status === "loading") {
	// 	return <Text>Loading...</Text>;
	// }

	// if (status === "failed") {
	// 	return <Text>Error: {error}</Text>;
	// }

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				{decks.map((item, idx) => (
					<ExpandableDeckView {...item} key={idx} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default DecksList;
