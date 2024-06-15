import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { chartConfig } from "@/constants/chart";
import { StackedBarChart } from "react-native-chart-kit";

const data = {
	labels: ["Test1", "Test2"],
	legend: ["L1", "L2", "L3"],
	data: [
		[60, 60, 60],
		[30, 30, 60],
	],
	barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"],
};

export default function AnswerButtonsChart() {
	return (
		<StackedBarChart
			style={{
				marginVertical: 8,
				borderRadius: 16,
			}}
			data={data}
			width={Dimensions.get("screen").width}
			height={220}
			chartConfig={chartConfig}
			hideLegend
		/>
	);
}

const styles = StyleSheet.create({});
