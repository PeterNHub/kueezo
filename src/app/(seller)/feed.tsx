import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Demand = ({ id }: { id: number }) => (
  <Link href={`/(seller)/bid/${id}`} asChild>
    <Pressable style={{ padding: 8, borderWidth: 1, marginBottom: 8 }}>
      <Text>Demand #{id}</Text>
    </Pressable>
  </Link>
);

export default function SellerFeed() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Stack.Screen
        options={{
          headerTitle: "Kueezo",
          headerLeft: () => <Ionicons name="menu" size={24} color="black" />,
        }}
      />
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
          Available Demands
        </Text>
        <Demand id={1} />
        <Demand id={2} />
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
          My Bids
        </Text>
        {/* Add bid items here */}
      </View>
    </View>
  );
}
