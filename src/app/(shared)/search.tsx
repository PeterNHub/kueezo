import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, FONT_SIZES } from "../../constants/theme";

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search for demands" />
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
  searchContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
  },
  searchInput: {
    fontSize: FONT_SIZES.medium,
  },
});
