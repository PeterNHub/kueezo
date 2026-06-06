import { Stack, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Checkout() {
  const { offerId } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Stack.Screen options={{ headerTitle: "Checkout" }} />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        Checkout for Offer #{offerId}
      </Text>
      <Text style={{ marginBottom: 16 }}>
        This is a placeholder for the checkout process.
      </Text>
      <Button title="Pay" onPress={() => {}} />
    </View>
  );
}
