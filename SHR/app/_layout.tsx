import { Stack } from 'expo-router';
import { ThemeProvider } from '../_theme/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="splash" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal/absenceStats" options={{ presentation: 'modal' }} />
        <Stack.Screen name="modal/userProfileEdit" options={{ presentation: 'modal' }} />
        <Stack.Screen name="modal/exportOptions" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
