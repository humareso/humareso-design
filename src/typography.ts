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
  logoFont: 'Marion',
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

// Marion font utilities
export const getMarionFontStyles = (variant: 'regular' | 'bold' | 'italic') => {
  const base = {
    fontFamily: HUMARESO_TYPOGRAPHY.logoFont,
    fontDisplay: 'swap' as const,
  };

  switch (variant) {
    case 'regular':
      return {
        ...base,
        fontWeight: 'normal' as const,
        fontStyle: 'normal' as const,
      };
    case 'bold':
      return {
        ...base,
        fontWeight: 'bold' as const,
        fontStyle: 'normal' as const,
      };
    case 'italic':
      return {
        ...base,
        fontWeight: 'normal' as const,
        fontStyle: 'italic' as const,
      };
    default:
      return base;
  }
};

export const getLogoFontFamily = () => {
  return HUMARESO_TYPOGRAPHY.logoFont;
};
