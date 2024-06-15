import { chartConfig } from "@/constants/chart";
import { Dimensions } from "react-native";
import { ContributionGraph as RNContributionGraph } from "react-native-chart-kit";

const commitsData = [
	{ date: "2017-01-02", count: 1 },
	{ date: "2017-01-03", count: 2 },
	{ date: "2017-01-04", count: 3 },
	{ date: "2017-01-05", count: 4 },
	{ date: "2017-01-06", count: 5 },
	{ date: "2017-01-30", count: 2 },
	{ date: "2017-01-31", count: 3 },
	{ date: "2017-03-01", count: 2 },
	{ date: "2017-04-02", count: 4 },
	{ date: "2017-03-05", count: 2 },
	{ date: "2024-06-06", count: 40 },
];

export default function ContributionGraph() {
	return (
		<RNContributionGraph
			values={commitsData}
			endDate={new Date("2024-06-16")}
			numDays={365}
			width={Dimensions.get("screen").width - 10}
			height={220}
			chartConfig={chartConfig}
			yAxisLabel="Days"
			tooltipDataAttrs={() => {
				return {};
			}}
		/>
	);
}
