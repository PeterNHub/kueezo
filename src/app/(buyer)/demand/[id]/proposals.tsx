import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Proposal = ({ id }: { id: number }) => (
  <Link href={`/(shared)/checkout/${id}`} asChild>
    <Pressable style={{ padding: 8, borderWidth: 1, marginBottom: 8 }}>
      <Text>Proposal #{id}</Text>
    </Pressable>
  </Link>
);

export default function Proposals() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Stack.Screen options={{ headerTitle: `Proposals for Demand #${id}` }} />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        Proposals
      </Text>
      <Proposal id={1} />
      <Proposal id={2} />
    </View>
  );
}
