import { store } from "@/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";

const RootLayout = () => {
	return (
		<Provider store={store}>
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			/>
		</Provider>
	);
};

export default RootLayout;
