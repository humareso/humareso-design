import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { HUMARESO_COLORS } from '../../colors';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const humaresoTheme = extendTheme({
  config,
  colors: {
    // Extend Chakra's color system with Humareso colors
    humareso: {
      red: HUMARESO_COLORS.red,
      navy: HUMARESO_COLORS.navy,
      text: HUMARESO_COLORS.text,
      brown: HUMARESO_COLORS.brown,
      accent: HUMARESO_COLORS.accent,
    },
    // Override Chakra's default colors with Humareso equivalents
    red: {
      50: HUMARESO_COLORS.red.light,
      500: HUMARESO_COLORS.red.primary,
      600: HUMARESO_COLORS.red.muted,
      700: HUMARESO_COLORS.red.dark,
    },
    gray: {
      50: HUMARESO_COLORS.navy.offWhite,
      100: HUMARESO_COLORS.navy.light,
      800: HUMARESO_COLORS.navy.primary,
      900: HUMARESO_COLORS.navy.black,
    },
    blue: {
      900: HUMARESO_COLORS.navy.primary,
    },
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'humareso',
      },
      variants: {
        solid: {
          bg: HUMARESO_COLORS.red.primary,
          color: HUMARESO_COLORS.text.light,
          _hover: { bg: HUMARESO_COLORS.red.muted },
          _active: { bg: HUMARESO_COLORS.red.dark },
        },
        outline: {
          border: `2px solid ${HUMARESO_COLORS.red.primary}`,
          color: HUMARESO_COLORS.red.primary,
          _hover: { 
            bg: HUMARESO_COLORS.red.light,
            color: HUMARESO_COLORS.red.primary 
          },
        },
        ghost: {
          color: HUMARESO_COLORS.navy.primary,
          _hover: { bg: HUMARESO_COLORS.navy.light },
        },
      },
    },
  },
});
