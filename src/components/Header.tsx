import { Image, View, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Header() {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <StatusBar style="dark" />
      <View
        style={{
          alignItems: "center",
          paddingBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#E0E0E0",
          paddingTop: Platform.OS === "android" ? 25 : 0,
        }}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ width: 150, height: 40, resizeMode: "contain" }}
        />
      </View>
    </SafeAreaView>
  );
}
