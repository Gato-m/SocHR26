import { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '../_theme/useTheme';

export default function SplashScreen() {
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)/onboarding');
    }, 3000); // 3 sekundes

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <Text style={[styles.text, { color: theme.colors.text }]}>Ielādējam SHR...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginTop: 20, fontSize: 16 },
});

// Simulēta sesijas pārbaude
async function checkSession(): Promise<boolean> {
  // Šeit tu vari pārbaudīt PocketBase vai AsyncStorage
  return true; // vai false
}
