import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function DemandDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Stack.Screen options={{ headerTitle: `Demand #${id}` }} />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        Demand Title
      </Text>
      <Text style={{ marginBottom: 16 }}>Demand description...</Text>
      <Link href={`/(buyer)/demand/${id}/proposals`} asChild>
        <Button title="View Proposals" />
      </Link>
    </View>
  );
}
