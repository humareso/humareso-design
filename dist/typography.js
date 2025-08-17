"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFontWeight = exports.getTypographyStyles = exports.HUMARESO_TYPOGRAPHY = void 0;
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
