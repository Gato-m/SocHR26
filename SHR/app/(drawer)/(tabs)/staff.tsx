import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '../../../_theme/useTheme';
import { Text } from '../../../_components/ui/text';
import { Card } from '../../../_components/ui/card';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const users = [
  { id: '1', name: 'Jānis Bērziņš', role: 'Vadītājs', email: 'janis@example.com' },
  { id: '2', name: 'Anna Liepa', role: 'Darbinieks', email: 'anna@example.com' },
  { id: '3', name: 'Pēteris Ozols', role: 'Darbinieks', email: 'peteris@example.com' },
];

export default function staff() {
  const theme = useTheme();
  const router = useRouter();

  const handleUserPress = (userId: string) => {
    router.push(`/modal/userProfile?userId=${userId}`);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.lg,
      }}
    >
      <Text
        style={{
          color: theme.colors.primary,
          fontSize: theme.typography.h1,
          marginBottom: theme.spacing.lg,
        }}
      >
        Personāls
      </Text>

      <View style={{ gap: theme.spacing.md }}>
        {users.map((user) => (
          <TouchableOpacity key={user.id} onPress={() => handleUserPress(user.id)}>
            <Card style={styles.cardShadow}>
              <View style={styles.userCard}>
                <View style={styles.userInfo}>
                  <View style={[styles.avatar, { backgroundColor: theme.colors.primary }]}>
                    <Ionicons name="person" size={32} color={theme.colors.onPrimary} />
                  </View>
                  <View style={styles.userDetails}>
                    <Text
                      style={{
                        fontSize: theme.typography.h3,
                        fontWeight: '900',
                        color: theme.colors.text,
                      }}
                    >
                      {user.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: theme.typography.caption,
                        color: theme.colors.text,
                      }}
                    >
                      {user.role}
                    </Text>
                    <Text
                      style={{
                        fontSize: theme.typography.small,
                        color: theme.colors.text,
                      }}
                    >
                      {user.email}
                    </Text>
                  </View>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color={theme.colors.text}
                  style={{ opacity: 0.3 }}
                />
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    backgroundColor: 'white',
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  userDetails: {
    flex: 1,
    gap: 1,
  },
});
