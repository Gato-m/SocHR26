import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Text } from './text';
import { useTheme } from '../../_theme/useTheme';

interface Props {
  value: string | number;
  color?: 'primary' | 'success' | 'warning' | 'danger';
  style?: ViewStyle;
}

export const Badge: React.FC<Props> = ({ value, color = 'danger', style }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors[color],
          paddingHorizontal: theme.spacing.sm,
          paddingVertical: theme.spacing.xs,
          borderRadius: theme.radius.md,
          alignSelf: 'flex-start',
        },
        style,
      ]}
    >
      <Text style={{ color: theme.colors.text }}>{value}</Text>
    </View>
  );
};
