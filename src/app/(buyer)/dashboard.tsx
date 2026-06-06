import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

const ActiveRequest = ({ id }: { id: number }) => (
  <Link href={`/(buyer)/demand/${id}`} asChild>
    <Pressable style={{ padding: 8, borderWidth: 1, marginBottom: 8 }}>
      <Text>Demand #{id}</Text>
    </Pressable>
  </Link>
);

export default function Dashboard() {
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
          Feed
        </Text>
        {/* Add feed items here */}
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
          Active Requests
        </Text>
        <ActiveRequest id={1} />
        <ActiveRequest id={2} />
      </View>
      <Link href="/create-demand" asChild>
        <Pressable
          style={{
            position: "absolute",
            bottom: 16,
            right: 16,
            backgroundColor: "blue",
            borderRadius: 50,
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="add" size={24} color="white" />
        </Pressable>
      </Link>
    </View>
  );
}
