import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import RadioToggleGroup from "@/components/radio-toggle-group";
import Card from "@/components/ui/card";
import StatisticsBarChart from "@/components/statistics/bar-chart";
import PieChart from "@/components/statistics/pie-chart";
import AnswerButtonsChart from "@/components/statistics/answer-buttons-charts";
import ContributionGraph from "@/components/statistics/contribution-graph";

const StatisticsScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={styles.selectionView}>
					<RadioToggleGroup />
				</View>
				<Card title="Today">
					<AnswerButtonsChart />
				</Card>
				<Card title="Future Due">
					<AnswerButtonsChart />
				</Card>
				<Card title="Calendar">
					<ContributionGraph />
				</Card>
				<Card title="Reviews">
					<ContributionGraph />
				</Card>
				<Card title="Cards Counts">
					<PieChart />
				</Card>
				<Card title="Review Intervals">
					<StatisticsBarChart />
				</Card>
				<Card title="Card Ease">
					<StatisticsBarChart />
				</Card>
				<Card title="Hourly Breakdown">
					<StatisticsBarChart />
				</Card>
				<Card title="Answer Buttons">
					<AnswerButtonsChart />
				</Card>
				<Card title="Added">
					<RadioToggleGroup />
				</Card>
			</ScrollView>
		</SafeAreaView>
	);
};

export default StatisticsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "center",
		justifyContent: "flex-start",
		gap: 10,
	},
	selectionView: {
		height: 60,
		flex: 1,
		flexDirection: "row",
		paddingVertical: 10,
		backgroundColor: "lightgray",
		alignItems: "flex-start",
		justifyContent: "center",
		borderColor: "gray",
		borderBottomWidth: 1,
		marginBottom: 10,
	},
});
