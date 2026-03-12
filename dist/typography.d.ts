import { HumaresoTypography } from './types';
export declare const HUMARESO_TYPOGRAPHY: HumaresoTypography;
export declare const getTypographyStyles: (variant: "header" | "subheader" | "body") => {
    fontFamily: string;
    lineHeight: 1.5;
} | {
    fontWeight: 900;
    letterSpacing: "-0.02em";
    fontFamily: string;
    lineHeight: 1.5;
} | {
    fontWeight: 300;
    letterSpacing: "-0.02em";
    fontFamily: string;
    lineHeight: 1.5;
} | {
    fontWeight: 400;
    fontFamily: string;
    lineHeight: 1.5;
};
export declare const getFontWeight: (weight: keyof HumaresoTypography["fontWeight"]) => 300 | 400 | 500 | 900;
export declare const getMarionFontStyles: (variant: "regular" | "bold" | "italic") => {
    fontFamily: "Marion";
    fontDisplay: "swap";
} | {
    fontWeight: "normal";
    fontStyle: "normal";
    fontFamily: "Marion";
    fontDisplay: "swap";
} | {
    fontWeight: "bold";
    fontStyle: "normal";
    fontFamily: "Marion";
    fontDisplay: "swap";
} | {
    fontWeight: "normal";
    fontStyle: "italic";
    fontFamily: "Marion";
    fontDisplay: "swap";
};
export declare const getLogoFontFamily: () => "Marion";
