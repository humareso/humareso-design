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
  }
} as const;

export type LogoVariant = keyof typeof HUMARESO_LOGOS.primary | keyof typeof HUMARESO_LOGOS.alternative;
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
 * Logo component props interface
 */
export interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  alt?: string;
}
