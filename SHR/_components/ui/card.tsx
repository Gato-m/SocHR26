import React from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from '../../_theme/useTheme';

export const Card: React.FC<ViewProps> = ({ style, children, ...rest }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.surface,
          padding: theme.spacing.lg,
          borderRadius: theme.radius.lg,
          shadowColor: theme.colors.overlay,
          shadowOpacity: 0.2,
          shadowRadius: 8,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};
