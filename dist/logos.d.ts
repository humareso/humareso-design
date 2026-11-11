/**
 * Humareso Logo Assets
 * Centralized logo URLs for consistent usage across applications
 */
export declare const HUMARESO_LOGOS: {
    readonly primary: {
        readonly original: "https://cdn-hds.humareso.com/images/shared/logos/humareso_logo_original_r.png";
        readonly white: "https://cdn.humareso.com/hubfs/Logos/humareso_logo_org_icon_text_white.png";
        readonly black: "https://cdn.humareso.com/hubfs/Logos/humareso_logo_original.png";
    };
    readonly alternative: {
        readonly horizontal: "https://cdn.humareso.com/hubfs/Logos/humareso_logo_original.png";
        readonly stacked: "https://cdn.humareso.com/hubfs/Logos/humareso_logo_original.png";
        readonly icon: "https://cdn.humareso.com/hubfs/Logos/humareso_logo_icon_text.png";
    };
    readonly favicon: {
        readonly ico: "https://cdn.humareso.com/hubfs/logo.png";
        readonly png: "https://cdn.humareso.com/hubfs/logo.png";
        readonly svg: "https://cdn.humareso.com/hubfs/logo.png";
    };
    readonly lockup: {
        readonly light: "https://humareso.com/brand/logos/humareso_logo_icon_text.png";
        readonly dark: "https://humareso.com/brand/logos/humareso_logo_org_icon_text_white.png";
        readonly darkOneColor: "https://humareso.com/brand/logos/humareso_logo_icon_text_white.png";
    };
    readonly platforms: {
        readonly leave: {
            readonly standard: "https://cdn.humareso.com/hubfs/Logos/hts/humareso-leave-logo-standard.png";
            readonly dark: "https://cdn.humareso.com/hubfs/Logos/hts/humareso-leave-logo.png";
            readonly heroBackground: "https://cdn.humareso.com/hubfs/Backgrounds/humareso-grad-bg-purple.png";
        };
    };
    readonly myhr: {
        readonly primary: {
            readonly light: "https://humareso.com/brand/logos/myhr_logo_color_light.svg";
            readonly dark: "https://humareso.com/brand/logos/myhr_logo_color_dark.svg";
            readonly black: "https://humareso.com/brand/logos/myhr_logo_black.svg";
            readonly white: "https://humareso.com/brand/logos/myhr_logo_white.svg";
        };
        readonly small: {
            readonly light: "https://humareso.com/brand/logos/myhr_logo_small_color_light.svg";
            readonly dark: "https://humareso.com/brand/logos/myhr_logo_small_color_dark.svg";
            readonly black: "https://humareso.com/brand/logos/myhr_logo_small_black.svg";
            readonly white: "https://humareso.com/brand/logos/myhr_logo_small_white.svg";
        };
    };
};
export type PlatformId = keyof typeof HUMARESO_LOGOS.platforms;
export type LogoVariant = keyof typeof HUMARESO_LOGOS.primary | keyof typeof HUMARESO_LOGOS.alternative;
export type MyhrLogoVariant = keyof typeof HUMARESO_LOGOS.myhr.primary;
/** The myHR primary mark stops reading at this height; use the small mark at or under it. */
export declare const MYHR_SMALL_MARK_MAX_PX = 32;
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
export declare function getPlatformLogoUrl(platform: PlatformId, variant?: 'standard' | 'dark' | 'heroBackground'): string;
/**
 * Get the myHR Portal logo for a background and a rendered height. Pass the
 * height in CSS pixels and this picks the small mark when the primary mark's
 * tucked "my" would no longer read.
 */
export declare function getMyhrLogoUrl(variant?: MyhrLogoVariant, heightPx?: number): string;
/**
 * Logo component props interface
 */
export interface LogoProps {
    variant?: LogoVariant;
    size?: LogoSize;
    className?: string;
    alt?: string;
}
