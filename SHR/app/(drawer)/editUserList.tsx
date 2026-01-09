import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '../../_theme/useTheme';
import { Text } from '../../_components/ui/text';
import { Card } from '../../_components/ui/card';
import { Ionicons } from '@expo/vector-icons';

const users = [
  { id: '1', name: 'Jānis Bērziņš', role: 'Vadītājs', email: 'janis@example.com' },
  { id: '2', name: 'Anna Liepa', role: 'Darbinieks', email: 'anna@example.com' },
  { id: '3', name: 'Pēteris Ozols', role: 'Darbinieks', email: 'peteris@example.com' },
];

export default function editUserList() {
  const theme = useTheme();

  const handleEdit = (userId: string) => {
    console.log('Editing user:', userId);
  };

  const handleDelete = (userId: string) => {
    console.log('Deleting user:', userId);
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <View style={{ padding: theme.spacing.lg }}>
        <Text
          style={{
            fontSize: theme.typography.h1,
            fontWeight: '600',
            color: theme.colors.text,
            marginBottom: theme.spacing.lg,
          }}
        >
          Rediģēt lietotājus
        </Text>

        <View style={{ gap: theme.spacing.md }}>
          {users.map((user) => (
            <Card key={user.id} style={styles.cardShadow}>
              <View style={styles.userCard}>
                <View style={styles.userInfo}>
                  <View style={[styles.avatar, { backgroundColor: theme.colors.primary }]}>
                    <Ionicons name="person" size={24} color={theme.colors.onPrimary} />
                  </View>
                  <View style={styles.userDetails}>
                    <Text
                      style={{
                        fontSize: theme.typography.h3,
                        fontWeight: '600',
                        color: theme.colors.text,
                      }}
                    >
                      {user.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: theme.typography.caption,
                        color: theme.colors.text,
                        opacity: 0.7,
                      }}
                    >
                      {user.role}
                    </Text>
                    <Text
                      style={{
                        fontSize: theme.typography.small,
                        color: theme.colors.text,
                        opacity: 0.5,
                      }}
                    >
                      {user.email}
                    </Text>
                  </View>
                </View>
                <View style={styles.actions}>
                  <TouchableOpacity
                    onPress={() => handleEdit(user.id)}
                    style={[styles.actionButton, { backgroundColor: theme.colors.primary + '20' }]}
                  >
                    <Ionicons name="create-outline" size={20} color={theme.colors.primary} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleDelete(user.id)}
                    style={[styles.actionButton, { backgroundColor: theme.colors.danger + '20' }]}
                  >
                    <Ionicons name="trash-outline" size={20} color={theme.colors.danger} />
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
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
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  userDetails: {
    flex: 1,
    gap: 4,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
