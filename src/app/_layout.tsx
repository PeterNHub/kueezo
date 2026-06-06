import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(buyer)"
        options={{ drawerLabel: "Buyer", title: "Buyer" }}
      />
      <Drawer.Screen
        name="(seller)"
        options={{ drawerLabel: "Seller", title: "Seller" }}
      />
      <Drawer.Screen name="(shared)" options={{ drawerItemStyle: { display: "none" } }} />
    </Drawer>
  );
}
