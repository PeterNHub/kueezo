import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT_FAMILIES, FONT_SIZES } from "../../constants/theme";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>John Doe</Text>
        <Text style={styles.cardEmail}>john.doe@example.com</Text>
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
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
  },
  cardTitle: {
    fontSize: FONT_SIZES.medium,
    fontWeight: "bold",
  },
  cardEmail: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.darkGray,
    marginTop: 5,
  },
});
