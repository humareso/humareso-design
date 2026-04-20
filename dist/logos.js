"use strict";
/**
 * Humareso Logo Assets
 * Centralized logo URLs for consistent usage across applications
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HUMARESO_LOGOS = void 0;
exports.getLogoUrl = getLogoUrl;
exports.getFaviconUrl = getFaviconUrl;
exports.getPlatformLogoUrl = getPlatformLogoUrl;
exports.HUMARESO_LOGOS = {
    // Primary logos
    primary: {
        original: 'https://cdn-hds.humareso.com/images/shared/logos/humareso_logo_original_r.png',
        white: 'https://cdn-hds.humareso.com/images/shared/logos/humareso_logo_white.png',
        black: 'https://cdn-hds.humareso.com/images/shared/logos/humareso_logo_black.png',
    },
    // Alternative formats
    alternative: {
        horizontal: 'https://cdn-hds.humareso.com/images/shared/logos/humareso_logo_horizontal.png',
        stacked: 'https://cdn-hds.humareso.com/images/shared/logos/humareso_logo_stacked.png',
        icon: 'https://cdn-hds.humareso.com/images/shared/logos/humareso_icon.png',
    },
    // Favicon and small formats
    favicon: {
        ico: 'https://cdn-hds.humareso.com/images/shared/logos/favicon.ico',
        png: 'https://cdn-hds.humareso.com/images/shared/logos/favicon.png',
        svg: 'https://cdn-hds.humareso.com/images/shared/logos/favicon.svg',
    },
    // Per-platform product marks. These live on the HubSpot CMS
    // CDN (`cdn.humareso.com/hubfs/...`) rather than cdn-hds so
    // they can be shared with notify email layouts and HubSpot
    // landing pages without double-copying the asset.
    platforms: {
        leave: {
            // Pink wordmark, transparent background. Used in the
            // Leave notify email header and leave.humareso.com chrome.
            primary: 'https://cdn.humareso.com/hubfs/Logos/hts/humareso-leave-logo.png',
            // Purple gradient hero background for Leave onboarding
            // emails and magic-link templates.
            heroBackground: 'https://cdn.humareso.com/hubfs/Backgrounds/humareso-grad-bg-purple.png',
        },
    },
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
/**
 * Get the product mark URL for a specific platform. Prefer this
 * over hardcoding the CDN path in the consuming app so that a
 * brand-refresh-of-the-mark doesn't require a release of every
 * platform that displays it.
 */
function getPlatformLogoUrl(platform, variant = 'primary') {
    return exports.HUMARESO_LOGOS.platforms[platform][variant];
}
