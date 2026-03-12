"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogoFontFamily = exports.getMarionFontStyles = exports.getFontWeight = exports.getTypographyStyles = exports.HUMARESO_TYPOGRAPHY = void 0;
exports.HUMARESO_TYPOGRAPHY = {
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
const getTypographyStyles = (variant) => {
    const base = {
        fontFamily: exports.HUMARESO_TYPOGRAPHY.fontFamily,
        lineHeight: exports.HUMARESO_TYPOGRAPHY.lineHeight,
    };
    switch (variant) {
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
