import React, { useMemo, useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";

const RadioToggleGroup = () => {
	const radioButtons = useMemo(
		() => [
			{
				id: "1", // acts as primary key, should be unique and non-empty string
				label: "Decks",
				value: "option1",
			},
			{
				id: "2",
				label: "Collection",
				value: "option2",
			},
			// {
			// 	id: "3",
			// 	label: "Last 12 Months",
			// 	value: "option2",
			// },
			// {
			// 	id: "4",
			// 	label: "All History",
			// 	value: "option2",
			// },
		],
		[]
	);
	const [selectedId, setSelectedId] = useState<string | undefined>();

	return (
		<RadioGroup
			radioButtons={radioButtons}
			onPress={setSelectedId}
			selectedId={selectedId}
			layout="row"
			containerStyle={{
				borderColor: "lightblue",
			}}
			accessibilityLabel="radio"
		/>
	);
};

export default RadioToggleGroup;
