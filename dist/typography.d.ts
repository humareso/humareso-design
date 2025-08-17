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
