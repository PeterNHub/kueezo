import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function MyBids() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Stack.Screen options={{ headerTitle: "My Bids" }} />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        My Bids
      </Text>
      {/* Add a list of the user's bids here */}
    </View>
  );
}
