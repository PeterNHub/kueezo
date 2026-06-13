import { Link } from "expo-router";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { COLORS, FONT_SIZES } from "../../constants/theme";

export default function Feed() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Seller Feed</Text>
        <Text style={styles.headerSubtitle}>Open demands</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search for demands" />
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Open Demand</Text>
          <Text style={styles.cardTimer}>00:03:30</Text>
        </View>
        <Text style={styles.cardDescription}>Artisanal Coffee Set</Text>
        <View style={styles.cardTimerContainer}>
          <Text style={styles.cardTimerText}>09</Text>
          <Text style={styles.cardTimerSeparator}>:</Text>
          <Text style={styles.cardTimerText}>49</Text>
          <Text style={styles.cardTimerSeparator}>:</Text>
          <Text style={styles.cardTimerText}>55</Text>
        </View>
        <View style={styles.cardFooter}>
          <Link href="/(shared)/demand/1" style={styles.cardButtonSecondary}>
            Details
          </Link>
          <Link href="/(shared)/demand/1" style={styles.cardButtonPrimary}>
            Bid Now
          </Link>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Open Demand</Text>
          <Text style={styles.cardTimer}>00:22:40</Text>
        </View>
        <Text style={styles.cardDescription}>Artisanal Coffee Set</Text>
        <View style={styles.cardTimerContainer}>
          <Text style={styles.cardTimerText}>07</Text>
          <Text style={styles.cardTimerSeparator}>:</Text>
          <Text style={styles.cardTimerText}>31</Text>
          <Text style={styles.cardTimerSeparator}>:</Text>
          <Text style={styles.cardTimerText}>33</Text>
        </View>
        <View style={styles.cardFooter}>
          <Link href="/(shared)/demand/1" style={styles.cardButtonSecondary}>
            Details
          </Link>
          <Link href="/(shared)/demand/1" style={styles.cardButtonPrimary}>
            Bid Now
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
    paddingHorizontal: 20,
  },
  header: {
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: FONT_SIZES.large,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.darkGray,
    marginTop: 5,
  },
  searchContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    fontSize: FONT_SIZES.medium,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: FONT_SIZES.medium,
    fontWeight: "bold",
  },
  cardTimer: {
    fontSize: FONT_SIZES.small,
    color: "red",
  },
  cardDescription: {
    fontSize: FONT_SIZES.medium,
    marginBottom: 10,
  },
  cardTimerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  cardTimerText: {
    fontSize: FONT_SIZES.large,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  cardTimerSeparator: {
    fontSize: FONT_SIZES.large,
    fontWeight: "bold",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cardButtonPrimary: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cardButtonSecondary: {
    backgroundColor: COLORS.lightPrimary,
    color: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
