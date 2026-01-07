import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loadApp = async () => {
      // Simulē datu ielādi (piemēram, PocketBase sesijas pārbaudi)
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sekundes

      const isLoggedIn = await checkSession(); // Tava funkcija
      setReady(true);

      router.replace(isLoggedIn ? '/(tabs)/absence' : '/(auth)/login');
    };

    loadApp();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.text}>Ielādējam SHR...</Text>
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
