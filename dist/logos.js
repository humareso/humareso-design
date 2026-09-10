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
        white: 'https://cdn.humareso.com/hubfs/Logos/humareso_logo_org_icon_text_white.png',
        black: 'https://cdn.humareso.com/hubfs/Logos/humareso_logo_original.png',
    },
    // Alternative formats
    alternative: {
        horizontal: 'https://cdn.humareso.com/hubfs/Logos/humareso_logo_original.png',
        stacked: 'https://cdn.humareso.com/hubfs/Logos/humareso_logo_original.png',
        icon: 'https://cdn.humareso.com/hubfs/Logos/humareso_logo_icon_text.png',
    },
    // Favicon and small formats. This is the square "HR" mark
    // humareso.com has served as its browser-tab icon for years
    // (`<link rel="shortcut icon">` on the legacy HubSpot pages).
    // Every key intentionally points at the same 421x421 PNG —
    // there is no separate ico/svg cut, so all three formats fall
    // back to the one asset that is actually square.
    //
    // Do NOT point this at `humareso_logo_icon_text.png`
    // (the horizontal icon+wordmark lockup, 1292x300). That file
    // is for the `alternative.icon` header-logo slot above, not a
    // favicon — a wide image squashed into a square tab icon is
    // what caused the red-smear favicon bug on humareso-website
    // (see humareso-website/src/app/favicon.test.ts) and on
    // humareso-auth (see humareso-auth/src/__tests__/favicon.test.ts).
    // Served from the HubSpot CMS CDN (`cdn.humareso.com/hubfs/...`)
    // because the equivalent `cdn-hds.humareso.com/images/shared/logos/favicon.*`
    // keys were never uploaded to the underlying S3 bucket (`humareso-fe-assets`).
    favicon: {
        ico: 'https://cdn.humareso.com/hubfs/logo.png',
        png: 'https://cdn.humareso.com/hubfs/logo.png',
        svg: 'https://cdn.humareso.com/hubfs/logo.png',
    },
    // Per-platform product marks. These live on the HubSpot CMS
    // CDN (`cdn.humareso.com/hubfs/...`) rather than cdn-hds so
    // they can be shared with notify email layouts and HubSpot
    // landing pages without double-copying the asset.
    platforms: {
        leave: {
            // Purple wordmark, transparent background. For use on light
            // backgrounds (default web UI, light-mode chrome).
            standard: 'https://cdn.humareso.com/hubfs/Logos/hts/humareso-leave-logo-standard.png',
            // White wordmark, transparent background. For use on dark
            // backgrounds (dark-mode chrome, email headers). Also
            // referenced directly by humareso-notify for email layouts —
            // do not rename or remove this URL.
            dark: 'https://cdn.humareso.com/hubfs/Logos/hts/humareso-leave-logo.png',
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
function getPlatformLogoUrl(platform, variant = 'standard') {
    return exports.HUMARESO_LOGOS.platforms[platform][variant];
}
