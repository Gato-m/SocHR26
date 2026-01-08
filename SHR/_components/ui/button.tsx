import React from 'react';
import { variants, VariantName } from '../../_theme/variants';
import { Pressable, Text, ViewStyle, PressableProps, StyleSheet } from 'react-native';
import { useTheme } from '../../_theme/useTheme';

type ButtonProps = PressableProps & {
  variant?: VariantName;
  children?: React.ReactNode;
  style?: ViewStyle;
};

export function Button({ variant = 'primary', children, style, ...props }: ButtonProps) {
  const theme = useTheme();
  const variantStyles = variants[variant](theme);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: variantStyles.backgroundColor,
          borderWidth: variantStyles.borderWidth || 0,
          borderColor: variantStyles.borderColor,
          opacity: pressed ? 0.8 : variantStyles.opacity || 1,
        },
        style,
      ]}
      {...props}
    >
      {typeof children === 'string' ? (
        <Text style={[styles.text, { color: variantStyles.color }]}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

///// izveidojam theme/createVariants.ts:

import { AppTheme } from '../../_theme';

export type VariantStyles<Props = {}> = (
  theme: AppTheme,
  props: Props
) => {
  [key: string]: any;
};

export function createVariants<VariantName extends string, Props = {}>(
  variants: Record<VariantName, VariantStyles<Props>>
) {
  return variants;
}
