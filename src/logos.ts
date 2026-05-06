/**
 * Humareso Logo Assets
 * Centralized logo URLs for consistent usage across applications
 */

export const HUMARESO_LOGOS = {
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
      // Purple wordmark, transparent background. For use on light
      // backgrounds (default web UI, light-mode chrome).
      standard:
        'https://cdn.humareso.com/hubfs/Logos/hts/humareso-leave-logo-standard.png',
      // White wordmark, transparent background. For use on dark
      // backgrounds (dark-mode chrome, email headers). Also
      // referenced directly by humareso-notify for email layouts —
      // do not rename or remove this URL.
      dark:
        'https://cdn.humareso.com/hubfs/Logos/hts/humareso-leave-logo.png',
      // Purple gradient hero background for Leave onboarding
      // emails and magic-link templates.
      heroBackground:
        'https://cdn.humareso.com/hubfs/Backgrounds/humareso-grad-bg-purple.png',
    },
  },
} as const;

export type PlatformId = keyof typeof HUMARESO_LOGOS.platforms;
export type LogoVariant =
  | keyof typeof HUMARESO_LOGOS.primary
  | keyof typeof HUMARESO_LOGOS.alternative;
export type LogoSize = 'small' | 'medium' | 'large' | 'xlarge';

/**
 * Get logo URL by variant
 */
export function getLogoUrl(variant: LogoVariant = 'original'): string {
  if (variant in HUMARESO_LOGOS.primary) {
    return HUMARESO_LOGOS.primary[variant as keyof typeof HUMARESO_LOGOS.primary];
  }
  if (variant in HUMARESO_LOGOS.alternative) {
    return HUMARESO_LOGOS.alternative[variant as keyof typeof HUMARESO_LOGOS.alternative];
  }
  return HUMARESO_LOGOS.primary.original; // fallback
}

/**
 * Get favicon URL by format
 */
export function getFaviconUrl(format: keyof typeof HUMARESO_LOGOS.favicon = 'ico'): string {
  return HUMARESO_LOGOS.favicon[format];
}

/**
 * Get the product mark URL for a specific platform. Prefer this
 * over hardcoding the CDN path in the consuming app so that a
 * brand-refresh-of-the-mark doesn't require a release of every
 * platform that displays it.
 */
export function getPlatformLogoUrl(
  platform: PlatformId,
  variant: 'standard' | 'dark' | 'heroBackground' = 'standard'
): string {
  return HUMARESO_LOGOS.platforms[platform][variant];
}

/**
 * Logo component props interface
 */
export interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  alt?: string;
}
