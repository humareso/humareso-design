"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHumaresoRedLight = exports.getPlatformColor = exports.getTextColor = exports.getNavyColor = exports.getRedColor = exports.getColor = exports.HUMARESO_COLORS = void 0;
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
    platforms: {
        leave: {
            primary: '#6B3FA0',
            light: '#8654BF',
            dark: '#452968',
            soft: '#F6F2FA',
        },
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
/**
 * Pull the brand color for a specific Humareso platform (e.g.
 * `'leave'`). Use this instead of hardcoding hex values in a
 * service's stylesheet — that way when a platform's branding
 * changes, only this package has to ship.
 */
const getPlatformColor = (platform, variant = 'primary') => exports.HUMARESO_COLORS.platforms[platform][variant];
exports.getPlatformColor = getPlatformColor;
// Humareso red light utility (alias for red.light)
const getHumaresoRedLight = () => exports.HUMARESO_COLORS.red.light;
exports.getHumaresoRedLight = getHumaresoRedLight;
