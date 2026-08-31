export * from './types';
export * from './colors';
export * from './typography';
export * from './avatar';

// Design system constants
export const HUMARESO_DESIGN_SYSTEM = {
  name: 'Humareso Design System',
  version: '1.3.0',
  description: 'Shared design system for Humareso front-end applications'
} as const;

// CSS import helper. Loads the deployed stylesheet from the Humareso CDN;
// the package was never published to the public npm registry, so the old
// unpkg URL could not resolve.
export const importDesignSystem = () => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn-hds.humareso.com/design-system/latest/humareso-design.css';
    document.head.appendChild(link);
  }
};

// Logo utilities
export * from './logos';
export { HUMARESO_LOGOS, getLogoUrl, getFaviconUrl } from './logos';
export type { LogoVariant, LogoSize, LogoProps } from './logos';
