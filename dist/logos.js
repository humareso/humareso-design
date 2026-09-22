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
        // Red HR chip, white wordmark. This is the icon+wordmark lockup for
        // dark backgrounds (see `lockup.dark` below for the named, documented
        // version of this same file, served from a different CDN copy).
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
    // Explicitly named icon+wordmark lockup keys, by appearance and target
    // surface rather than by file history. `primary.white` and
    // `alternative.icon` above already carry two of these three files, but
    // neither name says which surface it belongs on, and that ambiguity is
    // exactly what has caused the wrong dark-mode lockup to get picked in
    // practice. Prefer these keys for any new dark-mode call site; the older
    // keys stay as-is for backward compatibility.
    //
    // Served from https://humareso.com/brand/logos/<file>, the website's own
    // public copy of the "Approved Humareso Logos" set (see
    // humareso-website src/components/marketing/brand/brand-data.ts), so
    // these three URLs track the same files the /brand page documents.
    lockup: {
        // Red HR chip, GREY wordmark. Light backgrounds only. The wordmark is
        // not visible against navy or any other dark surface.
        light: 'https://humareso.com/brand/logos/humareso_logo_icon_text.png',
        // Red HR chip, WHITE wordmark. The correct dark-background lockup.
        // Same 4.31:1 shape as `light` above. Only the wordmark color changes
        // so it stays legible on navy.
        dark: 'https://humareso.com/brand/logos/humareso_logo_org_icon_text_white.png',
        // WHITE chip with NAVY HR, white wordmark. A one-color dark-background
        // variant, distinct from `dark` above (which keeps the red chip). Use
        // for single-ink or grayscale-adjacent surfaces, not as a default.
        darkOneColor: 'https://humareso.com/brand/logos/humareso_logo_icon_text_white.png',
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
