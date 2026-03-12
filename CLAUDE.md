# Humareso Design

**Shared design system** for all Humareso front-end applications. Design tokens (colors, typography, spacing, shadows), CSS utility classes, and brand fonts. **Not a component library** — provides tokens and utilities, not React components.

- **Package:** `@rhabit/humareso-design` (GitHub Packages)
- **CDN:** Also deployed to CloudFront for CSS/font hosting

## Tech Stack

- TypeScript 5 (compiled to CommonJS, target ES2020)
- Pure CSS variables + utility classes
- Custom font files (Elza family, Marion family)
- Peer dependency: React >=18 (optional)
- Deploys to **GitHub Packages** (npm) + **AWS CloudFront/S3** (CDN)

## Key Commands

```bash
npm run build            # TypeScript compile → dist/
npm run dev              # Watch mode (tsc --watch)
npm run prepare          # Auto-builds on npm install
```

## Consumed By

- `humareso-admin` (npm dependency)
- `humareso-auth` (npm dependency)
- `humareso-portal` (npm dependency)

## Exports

### JavaScript/TypeScript

```typescript
import {
  HUMARESO_COLORS,       // Color constants (red, navy, text, brown, accent)
  HUMARESO_TYPOGRAPHY,   // Typography config
  HUMARESO_LOGOS,        // Logo URL map (10 variants)
  getColor,              // Dynamic color lookup
  getTypographyStyles,   // Get style objects by variant
  getLogoUrl,            // Get logo URL by variant
  importDesignSystem,    // Runtime CSS loader
} from '@rhabit/humareso-design';
```

### CSS Import

```css
@import '@rhabit/humareso-design/css/humareso-design.css';
```

### CSS Utility Classes

- Typography: `.humareso-text-header`, `.humareso-text-subheader`, `.humareso-text-body`
- Buttons: `.humareso-btn` + variants (`-primary`, `-success`, `-danger`, `-warning`, `-info`)
- Button sizes: `.humareso-btn-sm`, `.humareso-btn-lg`
- Logos: `.humareso-logo` + sizes (`-small`, `-medium`, `-large`, `-xlarge`)
- Fonts: `.elza-font`, `.marion-font`, `.humareso-logo-text`

## Brand Colors

| Token | Value |
|-------|-------|
| `--humareso-red` | #EF2E24 |
| `--humareso-navy` | #032F46 |
| `--humareso-off-white` | #F4F6F9 |

## Project Structure

```
├── src/                # TypeScript source
│   ├── index.ts        # Main entry (re-exports all)
│   ├── colors.ts       # Color constants + helpers
│   ├── typography.ts   # Typography constants + helpers
│   ├── logos.ts        # Logo URLs + helpers
│   └── types.ts        # TypeScript interfaces
├── dist/               # Compiled output (JS + .d.ts)
├── css/                # Pre-built CSS
│   ├── humareso-design.css  # Design tokens + utility classes
│   └── fonts.css            # @font-face declarations
└── fonts/              # Font files (Elza .otf, Marion .woff)
```
