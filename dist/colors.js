"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTextColor = exports.getNavyColor = exports.getRedColor = exports.getColor = exports.HUMARESO_COLORS = void 0;
exports.HUMARESO_COLORS = {
    red: {
        primary: '#EF2E24',
        dark: '#670204',
        light: '#F9DEDE',
        muted: '#C9261C',
    },
    navy: {
        primary: '#032F46',
        black: '#050707',
        light: '#CFD8E5',
        offWhite: '#F4F6F9',
    },
    text: {
        dark: '#1F3440',
        medium: '#3B4B56',
        light: '#FFFFFF',
        light80: 'rgba(255, 255, 255, 0.8)',
    },
    brown: {
        dark: '#4F1D0B',
        medium: '#964C31',
    },
    accent: {
        orange: '#C97C1C',
        yellowGreen: '#BFC91C',
        green: '#68C91C',
        teal: '#1EC4CC',
        purple: '#7D1ECC',
    },
};
const getColor = (colorPath) => {
    const path = colorPath.split('.');
    let current = exports.HUMARESO_COLORS;
    for (const key of path) {
        if (current[key] === undefined) {
            console.warn(`Color not found: ${colorPath}`);
            return '#000000';
        }
        current = current[key];
    }
    return current;
};
exports.getColor = getColor;
const getRedColor = (variant) => exports.HUMARESO_COLORS.red[variant];
exports.getRedColor = getRedColor;
const getNavyColor = (variant) => exports.HUMARESO_COLORS.navy[variant];
exports.getNavyColor = getNavyColor;
const getTextColor = (variant) => exports.HUMARESO_COLORS.text[variant];
exports.getTextColor = getTextColor;
