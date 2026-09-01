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
        // The brand accent teal. Named "Teal Accent" on humareso.com/brand
        // (--humareso-teal-accent); the bare "teal" name belongs to the muted
        // slate #3B7B8C per the 2026-08-31 brand reconciliation.
        tealAccent: '#1EC4CC',
        tealMuted: '#3B7B8C',
        // Deprecated alias: the CSS renames all kept one-release aliases and
        // the JS side gets the same courtesy. Without it, getColor('accent.teal')
        // returns the #000000 sentinel and paints consumers black at runtime.
        teal: '#1EC4CC',
        purple: '#7D1ECC',
    },
    platforms: {
        // Matches the Leave palette on humareso.com/brand and the shade the
        // Leave app renders as --color-brand in light mode (2026-08-31 brand
        // reconciliation: the old #6B3FA0 was the purple-500 ramp step, not
        // the flagship).
        leave: {
            primary: '#5A3584',
            light: '#7A52A8',
            dark: '#3D2260',
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
