import { FontAwesome } from "@expo/vector-icons";
import { Tabs, Link } from "expo-router";
import { Pressable, View } from "react-native";
import { COLORS } from "../../constants/theme";
import Header from "../../components/Header";

const CustomTabBarButton = ({ children, onPress }) => (
  <Link href="/create-demand" asChild>
    <Pressable style={{ top: -20, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesome name="plus" size={30} color={COLORS.white} />
      </View>
    </Pressable>
  </Link>
);

export default function SharedLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        header: (props) => <Header {...props} />,
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          headerTitle: "Dashboard",
          tabBarLabel: "Dashboard",
          href: "/dashboard",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          headerTitle: "Feed",
          tabBarLabel: "Feed",
          href: "/feed",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-alt" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="create-demand"
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          href: "/create-demand",
        }}
      />
      <Tabs.Screen
        name="my-bids"
        options={{
          headerTitle: "My Bids",
          tabBarLabel: "My Bids",
          href: "/my-bids",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gavel" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarLabel: "Profile",
          href: "/profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-demands"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="checkout/[offerId]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="bid/[id]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="demand/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
