import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BarChart } from "react-native-chart-kit";

const data = {
	labels: ["January", "February", "March", "April", "May", "June"],
	datasets: [
		{
			data: [20, 45, 28, 80, 99, 43],
		},
	],
};

const chartConfig = {
	backgroundGradientFrom: "#1E2923",
	backgroundGradientFromOpacity: 0,
	backgroundGradientTo: "#08130D",
	backgroundGradientToOpacity: 0.5,
	color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
	strokeWidth: 2, // optional, default 3
	barPercentage: 0.5,
	useShadowColorFromDataset: false, // optional
};
export default function StatisticsBarChart() {
	return (
		<BarChart
			style={{
				marginHorizontal: 8,
				borderRadius: 10,
                width: "90%"
			}}
			data={data}
			width={Dimensions.get("window").width}
			height={220}
			yAxisLabel="$"
			chartConfig={chartConfig}
			verticalLabelRotation={30}
		/>
	);
}

const styles = StyleSheet.create({});
