import { Stack, useLocalSearchParams } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";

export default function SubmitProposal() {
  const { demandId } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Stack.Screen options={{ headerTitle: `Bid for Demand #${demandId}` }} />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        Your Proposal
      </Text>
      <TextInput
        placeholder="Your message"
        multiline
        style={{ borderWidth: 1, padding: 8, marginBottom: 8, height: 100 }}
      />
      <TextInput
        placeholder="Price"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />
      <Button title="Submit Proposal" onPress={() => {}} />
    </View>
  );
}
