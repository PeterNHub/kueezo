
import { Tabs } from "expo-router";

export default function SellerLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="feed" options={{headerShown: false, tabBarLabel: 'Feed'}}/>
      <Tabs.Screen name="my-bids" options={{headerShown: false, tabBarLabel: 'My Bids'}}/>
    </Tabs>
  );
}
