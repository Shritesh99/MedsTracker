import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import { store } from "./src/store";
import Router from "./src/views";

export default function App() {
	return (
		<Provider store={store}>
			<Router />
			<StatusBar style="auto" />
		</Provider>
	);
}
