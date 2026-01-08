import { AppTheme } from './index';

export type VariantStyles<Props = {}> = (theme: AppTheme, props: Props) => {
  [key: string]: any;
};

export function createVariants<VariantName extends string, Props = {}>(
  variants: Record<VariantName, VariantStyles<Props>>
) {
  return variants;
}
