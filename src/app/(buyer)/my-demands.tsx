import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function MyDemands() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Stack.Screen options={{ headerTitle: "My Demands" }} />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        My Demands
      </Text>
      {/* Add a list of the user's demands here */}
    </View>
  );
}
