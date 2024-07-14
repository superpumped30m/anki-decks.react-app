import { store } from "@/store";
import { Stack, Tabs } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { Provider } from "react-redux";

const RootLayout = () => {
	return (
		<SQLiteProvider databaseName="anki.master.db">
			<Provider store={store}>
				<Stack
					screenOptions={{
						headerShown: false,
					}}
				/>
			</Provider>
		</SQLiteProvider>
	);
};

export default RootLayout;
