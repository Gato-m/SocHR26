import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { useTheme } from '../../_theme/useTheme';
import { createVariants } from './variants';

const textVariants = createVariants({
  h1: (theme) => ({
    fontSize: theme.typography.h1,
    fontFamily: theme.typography.fontBold,
    color: theme.colors.text,
  }),
  h2: (theme) => ({
    fontSize: theme.typography.h2,
    fontFamily: theme.typography.fontBold,
    color: theme.colors.text,
  }),
  body: (theme) => ({
    fontSize: theme.typography.body,
    fontFamily: theme.typography.fontRegular,
    color: theme.colors.text,
  }),
  caption: (theme) => ({
    fontSize: theme.typography.caption,
    fontFamily: theme.typography.fontRegular,
    color: theme.colors.text,
  }),
});

type TextVariant = keyof typeof textVariants;

interface Props extends RNTextProps {
  variant?: TextVariant;
}

export const Text: React.FC<Props> = ({ variant = 'body', style, ...rest }) => {
  const theme = useTheme();
  const variantStyle = textVariants[variant](theme, {});

  return <RNText style={[variantStyle, style]} {...rest} />;
};
