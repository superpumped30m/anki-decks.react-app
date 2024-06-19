import { SafeAreaView, ScrollView } from "react-native";
import { useAppSelector } from "@/store/hooks";
import ExpandableDeckView from "./expandable-deck-view";

const DecksList = () => {
	const decks = useAppSelector((state) => state.decks);

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
