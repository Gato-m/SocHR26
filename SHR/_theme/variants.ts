import { AppTheme } from './index';
import { createVariants, VariantStyles } from './createVariants';

// 🎨 Globālie UI varianti
export const variants = createVariants({
  primary: (theme: AppTheme) => ({
    backgroundColor: theme.colors.primary,
    color: theme.colors.onPrimary,
  }),
  outline: (theme: AppTheme) => ({
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    color: theme.colors.primary,
  }),
  ghost: (theme: AppTheme) => ({
    backgroundColor: 'transparent',
    color: theme.colors.primary,
    opacity: 0.8,
  }),
  danger: (theme: AppTheme) => ({
    backgroundColor: theme.colors.error,
    color: theme.colors.onError,
  }),
});

export const textVariants = createVariants({
  h1: (theme: AppTheme) => ({
    fontSize: theme.typography.h1,
    fontFamily: theme.typography.fontBold,
    color: theme.colors.text,
  }),
  h2: (theme: AppTheme) => ({
    fontSize: theme.typography.h2,
    fontFamily: theme.typography.fontBold,
    color: theme.colors.text,
  }),
  body: (theme: AppTheme) => ({
    fontSize: theme.typography.body,
    fontFamily: theme.typography.fontRegular,
    color: theme.colors.text,
  }),
  caption: (theme: AppTheme) => ({
    fontSize: theme.typography.caption,
    fontFamily: theme.typography.fontRegular,
    color: theme.colors.text,
  }),
});

export type VariantName = keyof typeof variants;
export type TextVariant = keyof typeof textVariants;
export { VariantStyles };
