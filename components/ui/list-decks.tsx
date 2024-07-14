import { SafeAreaView, ScrollView, Text } from "react-native";
import { useEffect, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import ExpandableDeckView from "./expandable-deck-view";
import DeckViewExpandable from "./deckViewExpandable";

type DeckInformationType = {
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
};

const ListDecks = () => {
	const db = useSQLiteContext();
	const [decks, setDecks] = useState<any>([]);

	useEffect(() => {
		const fetchDecks = async () => {
			try {
				await db.withTransactionAsync(async () => {
					const decks = await db.getAllAsync("SELECT * FROM decks");
					setDecks(decks);
                    console.log("decks selected", decks);
				});
			} catch (error) {
				console.error("Error fetching decks:", error);
			}
		};

		fetchDecks();
	}, []);

    console.log("decks:list",decks)
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				{decks?.map((item: any, idx:number) => (
					// <ExpandableDeckView {...item} key={idx} />
					<DeckViewExpandable {...item} key={idx} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default ListDecks;
