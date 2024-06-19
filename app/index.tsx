import React from "react";
import { Redirect } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/store";

export default () => {
	return (
		<Provider store={store}>
			<Redirect href="(root)" />
		</Provider>
	);
};
