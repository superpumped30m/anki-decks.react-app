import { SafeAreaView, ScrollView, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ExpandableDeckView from "./expandable-deck-view";
import { useEffect } from "react";
import { fetchAllDecks } from "@/store/ankiSlice";

const DecksList = () => {
	const decks = useAppSelector((state) => state.decks);
	const dispatch = useAppDispatch();

    useEffect(() => {
		dispatch(fetchAllDecks());
	}, [dispatch]);
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
