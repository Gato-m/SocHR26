import { View } from 'react-native';
import React from 'react';
import { useTheme } from '../../../_theme/useTheme';
import { Text } from '../../../_components/ui/text';

export default function absence() {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.lg,
      }}
    >
      <Text style={{ color: theme.colors.primary, fontSize: theme.typography.h1 }}>
        Pievienot datus
      </Text>
    </View>
  );
}
