import { HumaresoColors } from './types';

export const HUMARESO_COLORS: HumaresoColors = {
  red: {
    primary: '#EF2E24',
    dark: '#670204',
    light: '#F9DEDE',
    muted: '#C9261C',
  },
  navy: {
    primary: '#032F46',
    black: '#050707',
    light: '#CFD8E5',
    offWhite: '#F4F6F9',
  },
  text: {
    dark: '#1F3440',
    medium: '#3B4B56',
    light: '#FFFFFF',
    light80: 'rgba(255, 255, 255, 0.8)',
  },
  brown: {
    dark: '#4F1D0B',
    medium: '#964C31',
  },
  accent: {
    orange: '#C97C1C',
    yellowGreen: '#BFC91C',
    green: '#68C91C',
    teal: '#1EC4CC',
    purple: '#7D1ECC',
  },
};

export const getColor = (colorPath: string): string => {
  const path = colorPath.split('.');
  let current: any = HUMARESO_COLORS;
  
  for (const key of path) {
    if (current[key] === undefined) {
      console.warn(`Color not found: ${colorPath}`);
      return '#000000';
    }
    current = current[key];
  }
  
  return current;
};

export const getRedColor = (variant: keyof HumaresoColors['red']) => HUMARESO_COLORS.red[variant];
export const getNavyColor = (variant: keyof HumaresoColors['navy']) => HUMARESO_COLORS.navy[variant];
export const getTextColor = (variant: keyof HumaresoColors['text']) => HUMARESO_COLORS.text[variant];
