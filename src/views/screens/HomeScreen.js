import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity, GridView } from "react-native-ui-lib";

export default function HomeScreen({ navigation }) {
	const [items, setItems] = React.useState([
		{ name: "TURQUOISE", code: "#1abc9c" },
		{ name: "EMERALD", code: "#2ecc71" },
		{ name: "PETER RIVER", code: "#3498db" },
		{ name: "AMETHYST", code: "#9b59b6" },
		{ name: "WET ASPHALT", code: "#34495e" },
		{ name: "GREEN SEA", code: "#16a085" },
		{ name: "NEPHRITIS", code: "#27ae60" },
		{ name: "BELIZE HOLE", code: "#2980b9" },
		{ name: "WISTERIA", code: "#8e44ad" },
		{ name: "MIDNIGHT BLUE", code: "#2c3e50" },
		{ name: "SUN FLOWER", code: "#f1c40f" },
		{ name: "CARROT", code: "#e67e22" },
		{ name: "ALIZARIN", code: "#e74c3c" },
		{ name: "CLOUDS", code: "#ecf0f1" },
		{ name: "CONCRETE", code: "#95a5a6" },
		{ name: "ORANGE", code: "#f39c12" },
		{ name: "PUMPKIN", code: "#d35400" },
		{ name: "POMEGRANATE", code: "#c0392b" },
		{ name: "SILVER", code: "#bdc3c7" },
		{ name: "ASBESTOS", code: "#7f8c8d" },
	]);

	return (
		<GridView
			viewWidth={130}
			items={items}
			style={styles.gridView}
			// staticDimension={300}
			// fixed
			itemSpacing={10}
			renderCustomItem={(item) => (
				<TouchableOpacity
					key={item.code}
					onPress={() =>
						navigation.navigate("Details", {
							name: item.name,
							color: item.code,
						})
					}>
					<View
						style={[
							styles.itemContainer,
							{ backgroundColor: item.code },
						]}>
						<Text style={styles.itemName}>{item.name}</Text>
						<Text style={styles.itemCode}>{item.code}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	gridView: {
		marginTop: 10,
		flex: 1,
	},
	itemContainer: {
		justifyContent: "flex-end",
		borderRadius: 5,
		padding: 10,
		height: 150,
	},
	itemName: {
		fontSize: 16,
		color: "#fff",
		fontWeight: "600",
	},
	itemCode: {
		fontWeight: "600",
		fontSize: 12,
		color: "#fff",
	},
});
