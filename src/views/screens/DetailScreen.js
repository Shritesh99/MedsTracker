import React from "react";
import { Text, View } from "react-native";

function DetailScreen({route, navigation}) {
  const {name,color} = route.params;
  return (
    <View>
      <Text>DetailScreen ${name} ${color}</Text>
    </View>
  );
}

export default DetailScreen;
