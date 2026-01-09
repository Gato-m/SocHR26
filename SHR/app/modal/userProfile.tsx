import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '../../_theme/useTheme';
import { Text } from '../../_components/ui/text';
import { Card } from '../../_components/ui/card';
import { Ionicons } from '@expo/vector-icons';

// Mock user data - should match staff.tsx
const users = [
  { id: '1', name: 'Jānis Bērziņš', role: 'Vadītājs', email: 'janis@example.com' },
  { id: '2', name: 'Anna Liepa', role: 'Darbinieks', email: 'anna@example.com' },
  { id: '3', name: 'Pēteris Ozols', role: 'Darbinieks', email: 'peteris@example.com' },
];

export default function UserProfileModal() {
  const router = useRouter();
  const { userId } = useLocalSearchParams();
  const theme = useTheme();

  // Find user by ID
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: theme.colors.background, padding: theme.spacing.lg },
        ]}
      >
        <Text style={{ color: theme.colors.text, fontSize: theme.typography.h2 }}>
          Lietotājs nav atrasts
        </Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: theme.colors.primary, marginTop: theme.spacing.md }}>Aizvērt</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleEdit = () => {
    router.push(`/modal/userProfileEdit?userId=${userId}`);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={{ padding: theme.spacing.lg }}
    >
      {/* Header with close button */}
      <View style={styles.header}>
        <Text
          style={{
            fontSize: theme.typography.h1,
            fontWeight: '700',
            color: theme.colors.text,
          }}
        >
          Lietotāja profils
        </Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={28} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      {/* Avatar Section */}
      <View style={styles.avatarSection}>
        <View style={[styles.largeAvatar, { backgroundColor: theme.colors.primary }]}>
          <Ionicons name="person" size={64} color={theme.colors.onPrimary} />
        </View>
      </View>

      {/* User Info Cards */}
      <View style={{ gap: theme.spacing.md, marginTop: theme.spacing.lg }}>
        <Card>
          <View style={styles.infoRow}>
            <Ionicons name="person-outline" size={24} color={theme.colors.primary} />
            <View style={styles.infoContent}>
              <Text
                style={{
                  fontSize: theme.typography.caption,
                  color: theme.colors.text,
                  opacity: 0.6,
                }}
              >
                Vārds
              </Text>
              <Text
                style={{
                  fontSize: theme.typography.body,
                  fontWeight: '600',
                  color: theme.colors.text,
                  marginTop: 4,
                }}
              >
                {user.name}
              </Text>
            </View>
          </View>
        </Card>

        <Card>
          <View style={styles.infoRow}>
            <Ionicons name="briefcase-outline" size={24} color={theme.colors.primary} />
            <View style={styles.infoContent}>
              <Text
                style={{
                  fontSize: theme.typography.caption,
                  color: theme.colors.text,
                  opacity: 0.6,
                }}
              >
                Loma
              </Text>
              <Text
                style={{
                  fontSize: theme.typography.body,
                  fontWeight: '600',
                  color: theme.colors.text,
                  marginTop: 4,
                }}
              >
                {user.role}
              </Text>
            </View>
          </View>
        </Card>

        <Card>
          <View style={styles.infoRow}>
            <Ionicons name="mail-outline" size={24} color={theme.colors.primary} />
            <View style={styles.infoContent}>
              <Text
                style={{
                  fontSize: theme.typography.caption,
                  color: theme.colors.text,
                  opacity: 0.6,
                }}
              >
                E-pasts
              </Text>
              <Text
                style={{
                  fontSize: theme.typography.body,
                  fontWeight: '600',
                  color: theme.colors.text,
                  marginTop: 4,
                }}
              >
                {user.email}
              </Text>
            </View>
          </View>
        </Card>

        <Card>
          <View style={styles.infoRow}>
            <Ionicons name="finger-print-outline" size={24} color={theme.colors.primary} />
            <View style={styles.infoContent}>
              <Text
                style={{
                  fontSize: theme.typography.caption,
                  color: theme.colors.text,
                  opacity: 0.6,
                }}
              >
                ID
              </Text>
              <Text
                style={{
                  fontSize: theme.typography.body,
                  fontWeight: '600',
                  color: theme.colors.text,
                  marginTop: 4,
                }}
              >
                {user.id}
              </Text>
            </View>
          </View>
        </Card>
      </View>

      {/* Action Buttons */}
      <View style={{ gap: theme.spacing.md, marginTop: theme.spacing.xl }}>
        <TouchableOpacity
          onPress={handleEdit}
          style={[
            styles.button,
            { backgroundColor: theme.colors.primary, borderRadius: theme.radius.md },
          ]}
        >
          <Ionicons name="create-outline" size={20} color={theme.colors.onPrimary} />
          <Text
            style={{
              fontSize: theme.typography.body,
              fontWeight: '600',
              color: theme.colors.onPrimary,
              marginLeft: theme.spacing.sm,
            }}
          >
            Rediģēt profilu
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.back()}
          style={[
            styles.button,
            {
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: theme.colors.primary,
              borderRadius: theme.radius.md,
            },
          ]}
        >
          <Text
            style={{
              fontSize: theme.typography.body,
              fontWeight: '600',
              color: theme.colors.primary,
            }}
          >
            Aizvērt
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarSection: {
    alignItems: 'center',
    marginVertical: 24,
  },
  largeAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  infoContent: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});
