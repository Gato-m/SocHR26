import { Stack } from 'expo-router';
import { useTheme } from '../../_theme/useTheme';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

function MenuButton() {
  const theme = useTheme();
  const router = useRouter();

  const handleMenuPress = () => {
    // For now, just navigate to addUser
    // Later we can add a proper menu modal
    console.log('Menu pressed');
  };

  return (
    <TouchableOpacity onPress={handleMenuPress} style={{ marginLeft: 16 }}>
      <Ionicons name="menu" size={28} color={theme.colors.text} />
    </TouchableOpacity>
  );
}

export default function DrawerLayout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
        headerTintColor: theme.colors.text,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="addUser"
        options={{
          title: 'Pievienot lietotāju',
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="editUserList"
        options={{
          title: 'Rediģēt lietotājus',
          headerLeft: () => null,
        }}
      />
    </Stack>
  );
}
