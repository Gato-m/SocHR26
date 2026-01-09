import { View, ScrollView, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '../../_theme/useTheme';
import { Text } from '../../_components/ui/text';
import { Button } from '../../_components/ui/button';
import { Card } from '../../_components/ui/card';

export default function addUser() {
  const theme = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = () => {
    console.log('Adding user:', { name, email, role });
    // Reset form
    setName('');
    setEmail('');
    setRole('');
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
          Pievienot lietotāju
        </Text>

        <Card style={{ gap: theme.spacing.md }}>
          <View>
            <Text
              style={{
                fontSize: theme.typography.body,
                fontWeight: '600',
                color: theme.colors.text,
                marginBottom: theme.spacing.sm,
              }}
            >
              Vārds
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme.colors.background,
                  color: theme.colors.text,
                  borderColor: theme.colors.text + '40',
                },
              ]}
              placeholder="Ievadiet vārdu"
              placeholderTextColor={theme.colors.text + '60'}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: theme.typography.body,
                fontWeight: '600',
                color: theme.colors.text,
                marginBottom: theme.spacing.sm,
              }}
            >
              E-pasts
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme.colors.background,
                  color: theme.colors.text,
                  borderColor: theme.colors.text + '40',
                },
              ]}
              placeholder="Ievadiet e-pastu"
              placeholderTextColor={theme.colors.text + '60'}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: theme.typography.body,
                fontWeight: '600',
                color: theme.colors.text,
                marginBottom: theme.spacing.sm,
              }}
            >
              Loma
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme.colors.background,
                  color: theme.colors.text,
                  borderColor: theme.colors.text + '40',
                },
              ]}
              placeholder="Ievadiet lomu"
              placeholderTextColor={theme.colors.text + '60'}
              value={role}
              onChangeText={setRole}
            />
          </View>

          <Button
            onPress={handleSubmit}
            style={{
              backgroundColor: theme.colors.primary,
              padding: theme.spacing.md,
              borderRadius: theme.radius.md,
              alignItems: 'center',
              marginTop: theme.spacing.sm,
            }}
          >
            <Text
              style={{
                color: theme.colors.onPrimary,
                fontSize: theme.typography.body,
                fontWeight: '600',
              }}
            >
              Pievienot
            </Text>
          </Button>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
  },
});
