import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, Text, View, StyleSheet, ScrollView } from "react-native";
import { COLORS, FONT_SIZES, FONT_FAMILIES } from "../../constants/theme";

const ActiveRequest = ({ id }: { id: number }) => (
  <Link href={`/(buyer)/demand/${id}`} asChild>
    <Pressable style={styles.activeRequest}>
      <View style={styles.activeRequestIcon}>
        <Ionicons name="pencil" size={24} color={COLORS.primary} />
      </View>
      <View>
        <Text style={styles.activeRequestTitle}>Active Requests</Text>
        <Text style={styles.activeRequestSubtitle}>Post 30 open demands</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color={COLORS.darkGray} />
    </Pressable>
  </Link>
);

const CategoryCard = ({ icon, label }: { icon: any; label: string }) => (
  <Pressable style={styles.categoryCard}>
    <Ionicons name={icon} size={32} color={COLORS.white} />
    <Text style={styles.categoryLabel}>{label}</Text>
  </Pressable>
);

export default function Dashboard() {
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
            <Text style={styles.sectionTitle}>Feed</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CategoryCard icon="leaf-outline" label="Organic produce" />
            <CategoryCard icon="laptop-outline" label="Tech" />
            <CategoryCard icon="hammer-outline" label="Handmade goods" />
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Active Requests</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <ActiveRequest id={1} />
        </View>

        <Link href="/create-demand" asChild>
          <Pressable style={styles.postDemandButton}>
            <Text style={styles.postDemandButtonText}>POST A DEMAND' FAB</Text>
          </Pressable>
        </Link>
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
  activeRequest: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightPrimary,
    padding: 16,
    borderRadius: 12,
  },
  activeRequestIcon: {
    backgroundColor: COLORS.white,
    padding: 8,
    borderRadius: 8,
    marginRight: 16,
  },
  activeRequestTitle: {
    fontSize: FONT_SIZES.medium,
    fontFamily: FONT_FAMILIES.bold,
  },
  activeRequestSubtitle: {
    fontSize: FONT_SIZES.small,
    color: COLORS.darkGray,
  },
  categoryCard: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginRight: 16,
    width: 120,
    height: 120,
    justifyContent: "center",
  },
  categoryLabel: {
    fontSize: FONT_SIZES.small,
    color: COLORS.white,
    fontFamily: FONT_FAMILIES.medium,
    marginTop: 8,
    textAlign: "center",
  },
  postDemandButton: {
    backgroundColor: COLORS.primary,
    padding: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  postDemandButtonText: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT_FAMILIES.bold,
  },
});
