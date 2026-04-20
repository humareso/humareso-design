import { HumaresoColors } from './types';
export declare const HUMARESO_COLORS: HumaresoColors;
export declare const getColor: (colorPath: string) => string;
export declare const getRedColor: (variant: keyof HumaresoColors["red"]) => "#EF2E24" | "#670204" | "#F9DEDE" | "#C9261C";
export declare const getNavyColor: (variant: keyof HumaresoColors["navy"]) => "#032F46" | "#050707" | "#CFD8E5" | "#F4F6F9";
export declare const getTextColor: (variant: keyof HumaresoColors["text"]) => "#1F3440" | "#3B4B56" | "#FFFFFF" | "rgba(255, 255, 255, 0.8)";
/**
 * Pull the brand color for a specific Humareso platform (e.g.
 * `'leave'`). Use this instead of hardcoding hex values in a
 * service's stylesheet — that way when a platform's branding
 * changes, only this package has to ship.
 */
export declare const getPlatformColor: (platform: keyof HumaresoColors["platforms"], variant?: keyof HumaresoColors["platforms"]["leave"]) => "#6B3FA0" | "#8654BF" | "#452968" | "#F6F2FA";
export declare const getHumaresoRedLight: () => "#F9DEDE";
