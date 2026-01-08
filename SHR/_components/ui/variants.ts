import { AppTheme } from '../../_theme';

export type VariantStyles<Props> = (theme: AppTheme, props: Props) => any;

export function createVariants<VariantName extends string, Props extends object = {}>(
  variants: Record<VariantName, VariantStyles<Props>>
) {
  return variants;
}
