import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal/absenceStats" options={{ presentation: 'modal' }} />
      <Stack.Screen name="modal/userProfileEdit" options={{ presentation: 'modal' }} />
      <Stack.Screen name="modal/exportOptions" options={{ presentation: 'modal' }} />
    </Stack>
  );
}
