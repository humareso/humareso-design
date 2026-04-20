/**
 * Humareso Logo Assets
 * Centralized logo URLs for consistent usage across applications
 */
export declare const HUMARESO_LOGOS: {
    readonly primary: {
        readonly original: "https://cdn-hds.humareso.com/images/shared/logos/humareso_logo_original_r.png";
        readonly white: "https://cdn-hds.humareso.com/images/shared/logos/humareso_logo_white.png";
        readonly black: "https://cdn-hds.humareso.com/images/shared/logos/humareso_logo_black.png";
    };
    readonly alternative: {
        readonly horizontal: "https://cdn-hds.humareso.com/images/shared/logos/humareso_logo_horizontal.png";
        readonly stacked: "https://cdn-hds.humareso.com/images/shared/logos/humareso_logo_stacked.png";
        readonly icon: "https://cdn-hds.humareso.com/images/shared/logos/humareso_icon.png";
    };
    readonly favicon: {
        readonly ico: "https://cdn-hds.humareso.com/images/shared/logos/favicon.ico";
        readonly png: "https://cdn-hds.humareso.com/images/shared/logos/favicon.png";
        readonly svg: "https://cdn-hds.humareso.com/images/shared/logos/favicon.svg";
    };
    readonly platforms: {
        readonly leave: {
            readonly primary: "https://cdn.humareso.com/hubfs/Logos/hts/humareso-leave-logo.png";
            readonly heroBackground: "https://cdn.humareso.com/hubfs/Backgrounds/humareso-grad-bg-purple.png";
        };
    };
};
export type PlatformId = keyof typeof HUMARESO_LOGOS.platforms;
export type LogoVariant = keyof typeof HUMARESO_LOGOS.primary | keyof typeof HUMARESO_LOGOS.alternative;
export type LogoSize = 'small' | 'medium' | 'large' | 'xlarge';
/**
 * Get logo URL by variant
 */
export declare function getLogoUrl(variant?: LogoVariant): string;
/**
 * Get favicon URL by format
 */
export declare function getFaviconUrl(format?: keyof typeof HUMARESO_LOGOS.favicon): string;
/**
 * Get the product mark URL for a specific platform. Prefer this
 * over hardcoding the CDN path in the consuming app so that a
 * brand-refresh-of-the-mark doesn't require a release of every
 * platform that displays it.
 */
export declare function getPlatformLogoUrl(platform: PlatformId, variant?: 'primary' | 'heroBackground'): string;
/**
 * Logo component props interface
 */
export interface LogoProps {
    variant?: LogoVariant;
    size?: LogoSize;
    className?: string;
    alt?: string;
}
