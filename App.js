import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { Provider } from "react-redux";

import { store } from "./src/store";

export default function App() {
	return (
		<Provider store={store}>
			<View>
				<Text>Open up Ap to start working on your app!</Text>
				<StatusBar style="auto" />
			</View>
		</Provider>
	);
}
