import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import SharedLayout from "./(shared)/_layout";

export default function AppLayout() {
  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  );
}

function RootLayout() {
  const { user } = useAuth();

  if (user) {
    return <SharedLayout />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
