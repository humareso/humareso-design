# Humareso Design System

A comprehensive design system for Humareso front-end applications, providing consistent colors, typography, and design tokens.

## 🎨 Features

- **Complete Color Palette** - All Humareso brand colors with CSS variables
- **Typography System** - Elza font family with proper weights and spacing
- **Design Tokens** - Consistent spacing, shadows, and transitions
- **Utility Classes** - Ready-to-use CSS classes for common patterns
- **TypeScript Support** - Full type definitions and utilities

## 📦 Installation

```bash
npm install humareso-design
```

## 🚀 Quick Start

### CSS Import (Recommended)

```css
@import 'humareso-design/css/humareso-design.css';
```

### JavaScript Import

```javascript
import { importDesignSystem } from 'humareso-design';

// Auto-import CSS
importDesignSystem();
```

## 🎯 Usage

### Colors

```css
/* CSS Variables */
.my-element {
  background-color: var(--humareso-red);
  color: var(--humareso-navy);
}

/* Utility Classes */
<div class="humareso-bg-primary">Primary Background</div>
<div class="humareso-text-secondary">Secondary Text</div>
```

### Typography

```css
/* Typography Classes */
<h1 class="humareso-text-header">Main Header</h1>
<h2 class="humareso-text-subheader">Sub Header</h2>
<p class="humareso-text-body">Body text with proper spacing</p>
```

### JavaScript/TypeScript

```typescript
import { HUMARESO_COLORS, getColor, getTypographyStyles } from 'humareso-design';

// Use predefined colors
const primaryRed = HUMARESO_COLORS.red.primary; // '#EF2E24'

// Get colors dynamically
const navyColor = getColor('navy.primary'); // '#032F46'

// Get typography styles
const headerStyles = getTypographyStyles('header');
```

## 🎨 Design Tokens

### Primary Colors
- **Red**: #EF2E24 (Primary brand color)
- **Navy**: #032F46 (Secondary brand color)
- **Off-White**: #F4F6F9 (Background color)

### Typography
- **Font Family**: Elza (with system fallbacks)
- **Weights**: Light (300), Regular (400), Medium (500), Semibold (600), Bold (700), Black (900)
- **Header Spacing**: -0.02em
- **Line Height**: 1.5

### Utility Classes
- `.humareso-text-header` - Header typography
- `.humareso-text-subheader` - Subheader typography  
- `.humareso-text-body` - Body typography
- `.humareso-bg-primary` - Primary background
- `.humareso-btn-primary` - Primary button styles

## 📁 Package Structure

```
humareso-design/
├── css/
│   ├── humareso-design.css    # Main design tokens
│   └── fonts.css              # Elza font declarations
├── fonts/                     # Elza font files
├── dist/                      # Compiled JavaScript & types
└── src/                       # TypeScript source
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Build package
npm run build

# Watch mode
npm run dev
```

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

This design system is maintained by the Humareso team. Please ensure all changes align with established brand guidelines.

## 🖼️ Logo Assets

The design system includes centralized logo URLs for consistent usage across applications:

### Logo Variants

```typescript
import { HUMARESO_LOGOS, getLogoUrl } from 'humareso-design';

// Primary logos
const originalLogo = HUMARESO_LOGOS.primary.original;
const whiteLogo = HUMARESO_LOGOS.primary.white;
const blackLogo = HUMARESO_LOGOS.primary.black;

// Alternative formats
const horizontalLogo = HUMARESO_LOGOS.alternative.horizontal;
const stackedLogo = HUMARESO_LOGOS.alternative.stacked;
const iconLogo = HUMARESO_LOGOS.alternative.icon;

// Favicon formats
const faviconIco = HUMARESO_LOGOS.favicon.ico;
const faviconPng = HUMARESO_LOGOS.favicon.png;
const faviconSvg = HUMARESO_LOGOS.favicon.svg;
```

### Logo Utility Functions

```typescript
// Get logo by variant
const logoUrl = getLogoUrl('white'); // Returns white logo URL
const defaultLogo = getLogoUrl(); // Returns original logo URL

// Get favicon by format
const faviconUrl = getFaviconUrl('svg'); // Returns SVG favicon URL
```

### Logo CSS Classes

```html
<!-- Basic logo sizing -->
<img src="..." class="humareso-logo humareso-logo-medium" alt="Humareso" />

<!-- Logo with background variants -->
<img src="..." class="humareso-logo humareso-logo-large humareso-logo-bg-primary" alt="Humareso" />
```

### Logo Sizes
- `.humareso-logo-small` - 2rem height
- `.humareso-logo-medium` - 3rem height  
- `.humareso-logo-large` - 4rem height
- `.humareso-logo-xlarge` - 6rem height

### Logo Background Variants
- `.humareso-logo-bg-primary` - Red background
- `.humareso-logo-bg-navy` - Navy background
- `.humareso-logo-bg-off-white` - Off-white background
