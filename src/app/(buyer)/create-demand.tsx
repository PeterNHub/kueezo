import { Stack } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";

export default function CreateDemand() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Stack.Screen options={{ headerTitle: "Create Demand" }} />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        What are you looking for?
      </Text>
      <TextInput
        placeholder="Title"
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />
      <TextInput
        placeholder="Description"
        multiline
        style={{ borderWidth: 1, padding: 8, marginBottom: 8, height: 100 }}
      />
      <Button title="Submit Demand" onPress={() => {}} />
    </View>
  );
}
