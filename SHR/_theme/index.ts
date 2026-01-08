import { spacing } from './tokens/spacing';
import { typography } from './tokens/typography';
import { radius } from './tokens/radius';

import { semanticLight } from './semantic/semantic.light';
import { semanticDark } from './semantic/semantic.dark';

export const lightTheme = {
  colors: semanticLight,
  spacing,
  typography,
  radius,
  mode: 'light' as const,
};

export const darkTheme = {
  colors: semanticDark,
  spacing,
  typography,
  radius,
  mode: 'dark' as const,
};

export type AppTheme = typeof lightTheme | typeof darkTheme;
