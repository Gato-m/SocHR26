import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Text } from './text';
import { useTheme } from '../../_theme/useTheme';

interface Props {
  label: string;
  color?: 'primary' | 'success' | 'warning' | 'danger';
  style?: ViewStyle;
}

export const Tag: React.FC<Props> = ({ label, color = 'primary', style }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors[color],
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.xs,
          borderRadius: theme.radius.sm,
        },
        style,
      ]}
    >
      <Text style={{ color: theme.colors.text }}>{label}</Text>
    </View>
  );
};
