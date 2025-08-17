export * from './types';
export * from './colors';
export * from './typography';
export declare const HUMARESO_DESIGN_SYSTEM: {
    readonly name: "Humareso Design System";
    readonly version: "1.0.0";
    readonly description: "Shared design system for Humareso front-end applications";
};
export declare const importDesignSystem: () => void;
export * from './logos';
export { HUMARESO_LOGOS, getLogoUrl, getFaviconUrl } from './logos';
export type { LogoVariant, LogoSize, LogoProps } from './logos';
