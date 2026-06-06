
import { Tabs } from "expo-router";

export default function BuyerLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="dashboard" options={{headerShown: false, tabBarLabel: 'Dashboard'}}/>
      <Tabs.Screen name="my-demands" options={{headerShown: false, tabBarLabel: 'My Demands'}}/>
    </Tabs>
  );
}
