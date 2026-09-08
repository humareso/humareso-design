"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuoteStyles = exports.getQuoteFontFamily = exports.getLogoFontFamily = exports.getMarionFontStyles = exports.getFontWeight = exports.getDisplayFontFamily = exports.getTypographyStyles = exports.HUMARESO_TYPOGRAPHY = void 0;
exports.HUMARESO_TYPOGRAPHY = {
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
const getTypographyStyles = (variant) => {
    const base = {
        fontFamily: exports.HUMARESO_TYPOGRAPHY.fontFamily,
        lineHeight: exports.HUMARESO_TYPOGRAPHY.lineHeight,
    };
    switch (variant) {
        case 'display':
            return {
                fontFamily: exports.HUMARESO_TYPOGRAPHY.displayFont,
                fontWeight: exports.HUMARESO_TYPOGRAPHY.fontWeight.black,
                letterSpacing: exports.HUMARESO_TYPOGRAPHY.displaySpacing,
                lineHeight: exports.HUMARESO_TYPOGRAPHY.displayLineHeight,
            };
        case 'header':
            // Bold (700), not Black: the self-hosted Elza Black/Bold files were
            // trial cuts with boxed punctuation, so heavy weights now resolve to
            // Typekit's real Elza where kit bqu5hhx is loaded and synthesize from
            // the clean 600 cut elsewhere. See css/fonts.css.
            return {
                ...base,
                fontWeight: exports.HUMARESO_TYPOGRAPHY.fontWeight.bold,
                letterSpacing: exports.HUMARESO_TYPOGRAPHY.headerSpacing,
            };
        case 'subheader':
            return {
                ...base,
                fontWeight: exports.HUMARESO_TYPOGRAPHY.fontWeight.light,
                letterSpacing: exports.HUMARESO_TYPOGRAPHY.headerSpacing,
            };
        case 'body':
            return {
                ...base,
                fontWeight: exports.HUMARESO_TYPOGRAPHY.fontWeight.normal,
            };
        default:
            return base;
    }
};
exports.getTypographyStyles = getTypographyStyles;
const getDisplayFontFamily = () => {
    // Haboro Condensed is a serif display face — when the webfont
    // fails to load we fall back to another serif (Georgia / Times)
    // rather than Elza/system-sans so the H1 keeps its intended
    // personality. Same goes for Marion (logo font).
    return `${exports.HUMARESO_TYPOGRAPHY.displayFont}, Georgia, 'Times New Roman', serif`;
};
exports.getDisplayFontFamily = getDisplayFontFamily;
const getFontWeight = (weight) => {
    return exports.HUMARESO_TYPOGRAPHY.fontWeight[weight];
};
exports.getFontWeight = getFontWeight;
// Marion font utilities
const getMarionFontStyles = (variant) => {
    const base = {
        fontFamily: exports.HUMARESO_TYPOGRAPHY.logoFont,
        fontDisplay: 'swap',
    };
    switch (variant) {
        case 'regular':
            return {
                ...base,
                fontWeight: 'normal',
                fontStyle: 'normal',
            };
        case 'bold':
            return {
                ...base,
                fontWeight: 'bold',
                fontStyle: 'normal',
            };
        case 'italic':
            return {
                ...base,
                fontWeight: 'normal',
                fontStyle: 'italic',
            };
        default:
            return base;
    }
};
exports.getMarionFontStyles = getMarionFontStyles;
const getLogoFontFamily = () => {
    return exports.HUMARESO_TYPOGRAPHY.logoFont;
};
exports.getLogoFontFamily = getLogoFontFamily;
// Pull-quotes and testimonials. Georgia by name, never through the logo
// font: Marion is not in the Typekit kit but is installed on some of our own
// machines, so a quote set in Marion-with-fallback rendered as Marion for us
// and Georgia for everyone else. humareso.com/brand, 2026-09-07.
const getQuoteFontFamily = () => {
    return `${exports.HUMARESO_TYPOGRAPHY.quoteFont}, 'Times New Roman', serif`;
};
exports.getQuoteFontFamily = getQuoteFontFamily;
const getQuoteStyles = () => ({
    fontFamily: (0, exports.getQuoteFontFamily)(),
    fontStyle: 'italic',
    fontWeight: exports.HUMARESO_TYPOGRAPHY.fontWeight.normal,
    fontSize: '1.7rem',
    lineHeight: 1.4,
});
exports.getQuoteStyles = getQuoteStyles;
