import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default (Router) => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				options={{
					title: "Med Tracer",
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "#f4511e",
					},
					headerTintColor: "#fff",
					headerTitleStyle: {
						fontWeight: "bold",
					},
				}}
				name="Home"
				component={HomeScreen}
			/>
			<Stack.Screen
				name="Details"
				component={DetailScreen}
				options={({ route }) => ({
					title: route.params.name,
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: route.params.color,
					},
					headerTintColor: "#fff",
					headerTitleStyle: {
						fontWeight: "bold",
					},
				})}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);
