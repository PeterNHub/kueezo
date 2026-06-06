import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, FONT_SIZES } from "../../constants/theme";

export default function MyBids() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Bids</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Open Demand</Text>
          <Text style={styles.cardTimer}>00:03:30</Text>
        </View>
        <Text style={styles.cardDescription}>Artisanal Coffee Set</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardStatus}>Winning</Text>
        </View>
      </View>
    </SafeAreaView>
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
  cardFooter: {
    alignItems: "flex-end",
  },
  cardStatus: {
    fontSize: FONT_SIZES.medium,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});
