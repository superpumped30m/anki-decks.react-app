import { ChartConfig } from "react-native-chart-kit/dist/HelperTypes";

export const chartConfig:ChartConfig = {
	backgroundGradientFrom: "#1E2923",
	backgroundGradientFromOpacity: 0,
	backgroundGradientTo: "white",
	backgroundGradientToOpacity: 0,
	color: (opacity = 0) => `rgba(26, 255, 146, ${opacity})`,
	strokeWidth: 2, // optional, default 3
	barPercentage: 0.5,
	useShadowColorFromDataset: false, // optional
    backgroundColor: "white"
};
