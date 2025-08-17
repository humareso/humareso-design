"use strict";
/**
 * Humareso Logo Assets
 * Centralized logo URLs for consistent usage across applications
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HUMARESO_LOGOS = void 0;
exports.getLogoUrl = getLogoUrl;
exports.getFaviconUrl = getFaviconUrl;
exports.HUMARESO_LOGOS = {
    // Primary logos
    primary: {
        original: 'https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/humareso_logo_original_r.png',
        white: 'https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/humareso_logo_white.png',
        black: 'https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/humareso_logo_black.png',
    },
    // Alternative formats
    alternative: {
        horizontal: 'https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/humareso_logo_horizontal.png',
        stacked: 'https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/humareso_logo_stacked.png',
        icon: 'https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/humareso_icon.png',
    },
    // Favicon and small formats
    favicon: {
        ico: 'https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/favicon.ico',
        png: 'https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/favicon.png',
        svg: 'https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/favicon.svg',
    }
};
/**
 * Get logo URL by variant
 */
function getLogoUrl(variant = 'original') {
    if (variant in exports.HUMARESO_LOGOS.primary) {
        return exports.HUMARESO_LOGOS.primary[variant];
    }
    if (variant in exports.HUMARESO_LOGOS.alternative) {
        return exports.HUMARESO_LOGOS.alternative[variant];
    }
    return exports.HUMARESO_LOGOS.primary.original; // fallback
}
/**
 * Get favicon URL by format
 */
function getFaviconUrl(format = 'ico') {
    return exports.HUMARESO_LOGOS.favicon[format];
}
