/**
 * Humareso Logo Assets
 * Centralized logo URLs for consistent usage across applications
 */
export declare const HUMARESO_LOGOS: {
    readonly primary: {
        readonly original: "https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/humareso_logo_original_r.png";
        readonly white: "https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/humareso_logo_white.png";
        readonly black: "https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/humareso_logo_black.png";
    };
    readonly alternative: {
        readonly horizontal: "https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/humareso_logo_horizontal.png";
        readonly stacked: "https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/humareso_logo_stacked.png";
        readonly icon: "https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/humareso_icon.png";
    };
    readonly favicon: {
        readonly ico: "https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/favicon.ico";
        readonly png: "https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/favicon.png";
        readonly svg: "https://dzz4p2hemjh6b.cloudfront.net/images/shared/logos/favicon.svg";
    };
};
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
 * Logo component props interface
 */
export interface LogoProps {
    variant?: LogoVariant;
    size?: LogoSize;
    className?: string;
    alt?: string;
}
