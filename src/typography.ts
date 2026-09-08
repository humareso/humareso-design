import { HumaresoTypography } from './types';

export const HUMARESO_TYPOGRAPHY: HumaresoTypography = {
  fontFamily: 'Elza',
  displayFont: 'haboro-condensed',
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  headerSpacing: '-0.02em',
  // Matches --tracking-display on humareso.com (2026-08-31 brand
  // reconciliation; supersedes the -0.045em set under ENGAGE-2039).
  displaySpacing: '-0.03em',
  lineHeight: 1.5,
  displayLineHeight: 1.05,
  // Stacked display statements (merch, posters): tighten to 0.88.
  statementLineHeight: 0.88,
  logoFont: 'Marion',
  // Pull-quotes and testimonials set in Georgia italic, by name. See
  // getQuoteFontFamily() for why it is not Marion.
  quoteFont: 'Georgia',
};

export const getTypographyStyles = (variant: 'display' | 'header' | 'subheader' | 'body') => {
  const base = {
    fontFamily: HUMARESO_TYPOGRAPHY.fontFamily,
    lineHeight: HUMARESO_TYPOGRAPHY.lineHeight,
  };

  switch (variant) {
    case 'display':
      return {
        fontFamily: HUMARESO_TYPOGRAPHY.displayFont,
        fontWeight: HUMARESO_TYPOGRAPHY.fontWeight.black,
        letterSpacing: HUMARESO_TYPOGRAPHY.displaySpacing,
        lineHeight: HUMARESO_TYPOGRAPHY.displayLineHeight,
      };
    case 'header':
      // Bold (700), not Black: the self-hosted Elza Black/Bold files were
      // trial cuts with boxed punctuation, so heavy weights now resolve to
      // Typekit's real Elza where kit bqu5hhx is loaded and synthesize from
      // the clean 600 cut elsewhere. See css/fonts.css.
      return {
        ...base,
        fontWeight: HUMARESO_TYPOGRAPHY.fontWeight.bold,
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

export const getDisplayFontFamily = () => {
  // Haboro Condensed is a serif display face — when the webfont
  // fails to load we fall back to another serif (Georgia / Times)
  // rather than Elza/system-sans so the H1 keeps its intended
  // personality. Same goes for Marion (logo font).
  return `${HUMARESO_TYPOGRAPHY.displayFont}, Georgia, 'Times New Roman', serif`;
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

// Pull-quotes and testimonials. Georgia by name, never through the logo
// font: Marion is not in the Typekit kit but is installed on some of our own
// machines, so a quote set in Marion-with-fallback rendered as Marion for us
// and Georgia for everyone else. humareso.com/brand, 2026-09-07.
export const getQuoteFontFamily = () => {
  return `${HUMARESO_TYPOGRAPHY.quoteFont}, 'Times New Roman', serif`;
};

export const getQuoteStyles = () => ({
  fontFamily: getQuoteFontFamily(),
  fontStyle: 'italic' as const,
  fontWeight: HUMARESO_TYPOGRAPHY.fontWeight.normal,
  fontSize: '1.7rem',
  lineHeight: 1.4,
});
