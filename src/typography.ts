import { HumaresoTypography } from './types';

export const HUMARESO_TYPOGRAPHY: HumaresoTypography = {
  fontFamily: 'Elza',
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    black: 900,
  },
  headerSpacing: '-0.02em',
  lineHeight: 1.5,
};

export const getTypographyStyles = (variant: 'header' | 'subheader' | 'body') => {
  const base = {
    fontFamily: HUMARESO_TYPOGRAPHY.fontFamily,
    lineHeight: HUMARESO_TYPOGRAPHY.lineHeight,
  };

  switch (variant) {
    case 'header':
      return {
        ...base,
        fontWeight: HUMARESO_TYPOGRAPHY.fontWeight.black,
        letterSpacing: HUMARESO_TYPOGRAPHY.headerSpacing,
      };
    case 'subheader':
      return {
        ...base,
        fontWeight: HUMARESO_TYPOGRAPHY.fontWeight.light,
        letterSpacing: HUMARESO_TYPOGRAPHY.headerSpacing,
      };
    case 'body':
      return {
        ...base,
        fontWeight: HUMARESO_TYPOGRAPHY.fontWeight.normal,
      };
    default:
      return base;
  }
};

export const getFontWeight = (weight: keyof HumaresoTypography['fontWeight']) => {
  return HUMARESO_TYPOGRAPHY.fontWeight[weight];
};
