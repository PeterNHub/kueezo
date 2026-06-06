import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { COLORS } from "../../constants/theme";

export default function SharedLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarLabel: "Feed",
          href: "/feed",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-alt" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarLabel: "Dashboard",
          href: "/dashboard",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-demands"
        options={{
          tabBarLabel: "My Demands",
          href: "/my-demands",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-bids"
        options={{
          tabBarLabel: "My Bids",
          href: "/my-bids",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gavel" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          href: "/search",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          href: "/profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="create-demand"
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
    </Tabs>
  );
}
