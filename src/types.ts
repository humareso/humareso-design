export interface HumaresoColors {
  red: {
    primary: '#EF2E24';
    dark: '#670204';
    light: '#F9DEDE';
    muted: '#C9261C';
  };
  navy: {
    primary: '#032F46';
    black: '#050707';
    light: '#CFD8E5';
    offWhite: '#F4F6F9';
  };
  text: {
    dark: '#1F3440';
    medium: '#3B4B56';
    light: '#FFFFFF';
    light80: 'rgba(255, 255, 255, 0.8)';
  };
  brown: {
    dark: '#4F1D0B';
    medium: '#964C31';
  };
  accent: {
    orange: '#C97C1C';
    yellowGreen: '#BFC91C';
    green: '#68C91C';
    teal: '#1EC4CC';
    purple: '#7D1ECC';
  };
  /**
   * Product-specific brand colors. Humareso's umbrella palette
   * (red / navy above) is the corporate mark; individual
   * platforms override with their own lead hue. Leave uses
   * purple — matching the notify email header + the leave.humareso.com
   * UI. Add new platforms here as they get branded.
   */
  platforms: {
    leave: {
      primary: '#6B3FA0';
      light: '#8654BF';
      dark: '#452968';
      soft: '#F6F2FA';
    };
  };
}

export interface HumaresoTypography {
  fontFamily: 'Elza' | 'Marion' | string;
  displayFont: 'haboro-condensed';
  fontWeight: {
    light: 300;
    normal: 400;
    medium: 500;
    semibold: 600;
    bold: 700;
    black: 900;
  };
  headerSpacing: '-0.02em';
  displaySpacing: '-0.025em';
  lineHeight: 1.5;
  displayLineHeight: 1.05;
  logoFont: 'Marion';
}

export interface HumaresoSpacing {
  borderRadius: {
    sm: '4px';
    default: '8px';
    lg: '12px';
  };
}

export interface HumaresoShadows {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
}

export interface HumaresoTransitions {
  fast: '150ms ease-in-out';
  normal: '250ms ease-in-out';
  slow: '350ms ease-in-out';
}

export interface HumaresoDesignSystem {
  colors: HumaresoColors;
  typography: HumaresoTypography;
  spacing: HumaresoSpacing;
  shadows: HumaresoShadows;
  transitions: HumaresoTransitions;
}

export type HumaresoColorKey = keyof HumaresoColors;
export type HumaresoFontWeight = keyof HumaresoTypography['fontWeight'];
