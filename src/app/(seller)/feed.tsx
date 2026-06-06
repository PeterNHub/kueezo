import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, Text, View, StyleSheet, ScrollView } from "react-native";
import { COLORS, FONT_SIZES, FONT_FAMILIES } from "../../constants/theme";

const Demand = ({ id }: { id: number }) => (
  <Link href={`/(seller)/bid/${id}`} asChild>
    <Pressable style={styles.demandCard}>
      <View style={styles.demandInfo}>
        <Text style={styles.demandTitle}>Demand #{id}</Text>
        <Text style={styles.demandSubtitle}>Some details about the demand</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color={COLORS.darkGray} />
    </Pressable>
  </Link>
);

export default function SellerFeed() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "Kueezó",
          headerTitleStyle: {
            color: COLORS.primary,
            fontFamily: FONT_FAMILIES.bold,
            fontSize: FONT_SIZES.large,
          },
          headerLeft: () => <Ionicons name="menu" size={32} color={COLORS.black} style={{marginLeft: 10}}/>,
          headerRight: () => <Ionicons name="notifications-outline" size={28} color={COLORS.black} style={{marginRight: 10}}/>,
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: false,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Available Demands</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <Demand id={1} />
          <Demand id={2} />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Bids</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          {/* Add bid items here */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.large,
    fontFamily: FONT_FAMILIES.bold,
  },
  seeAll: {
    fontSize: FONT_SIZES.small,
    color: COLORS.primary,
    fontFamily: FONT_FAMILIES.medium,
  },
  demandCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.lightPrimary,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  demandInfo: {
    flex: 1,
  },
  demandTitle: {
    fontSize: FONT_SIZES.medium,
    fontFamily: FONT_FAMILIES.bold,
  },
  demandSubtitle: {
    fontSize: FONT_SIZES.small,
    color: COLORS.darkGray,
  },
});
