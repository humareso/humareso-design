export * from './types';
export * from './colors';
export * from './typography';

// Design system constants
export const HUMARESO_DESIGN_SYSTEM = {
  name: 'Humareso Design System',
  version: '1.0.0',
  description: 'Shared design system for Humareso front-end applications'
} as const;

// CSS import helper
export const importDesignSystem = () => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/humareso-design@latest/css/humareso-design.css';
    document.head.appendChild(link);
  }
};

// Logo utilities
export * from './logos';
export { HUMARESO_LOGOS, getLogoUrl, getFaviconUrl } from './logos';
export type { LogoVariant, LogoSize, LogoProps } from './logos';

// UI Components
export * from './components';
