"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogoFontFamily = exports.getMarionFontStyles = exports.getFontWeight = exports.getDisplayFontFamily = exports.getTypographyStyles = exports.HUMARESO_TYPOGRAPHY = void 0;
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
    displaySpacing: '-0.025em',
    lineHeight: 1.5,
    displayLineHeight: 1.05,
    logoFont: 'Marion',
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
            return {
                ...base,
                fontWeight: exports.HUMARESO_TYPOGRAPHY.fontWeight.black,
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
    return `${exports.HUMARESO_TYPOGRAPHY.displayFont}, ${exports.HUMARESO_TYPOGRAPHY.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
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
