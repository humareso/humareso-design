# Humareso Design

**Shared design system** for all Humareso front-end applications. Design tokens (colors, typography, spacing, shadows), CSS utility classes, and brand fonts. **Not a component library** — provides tokens and utilities, not React components.

- **Package:** `@humareso/humareso-design` (GitHub Packages)
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
npm test                 # Font integrity + CSS/JS token parity checks
npm run dev              # Watch mode (tsc --watch)
npm run prepare          # Auto-builds on npm install
```

`npm test` gates both deploy jobs in `.github/workflows/deploy.yml`, so a red
test blocks the npm publish and the CDN sync.

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
} from '@humareso/humareso-design';
```

### CSS Import

```css
@import '@humareso/humareso-design/css/humareso-design.css';
```

### CSS Utility Classes

- Typography: `.humareso-text-header`, `.humareso-text-subheader`, `.humareso-text-body`
- Buttons: `.humareso-btn` + variants (`-primary`, `-success`, `-danger`, `-warning`, `-info`)
- Button sizes: `.humareso-btn-sm`, `.humareso-btn-lg`
- Logos: `.humareso-logo` + sizes (`-small`, `-medium`, `-large`, `-xlarge`)
- Fonts: `.elza-font`, `.marion-font`, `.humareso-logo-text`

### Haboro Display Rules (set 2026-07-13)

Haboro Condensed Black (the display face, H1/statement only) runs wide at its default fit:

- **Kerning:** all display/title use tracks at `letter-spacing: -0.045em` (`displaySpacing` token, `--display-spacing` CSS var). The old `-0.025em` reads airy; `-0.06em` collides lowercase pairs like t/i.
- **Stacked statements** (merch, posters, multi-line heroes): `line-height: 0.88` (`statementLineHeight` token, `--statement-line-height` CSS var). Single-line web H1s keep `displayLineHeight: 1.05`.
- Reference implementations: "Resting HR Face." and "out. of. office." in `humareso-shop/brand/`.

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

## Claude Code Plugin: humareso-commands

This repo ships `.claude/settings.json`, which declares the internal `humareso`
marketplace and enables the `humareso-commands` plugin. Anyone who opens Claude
Code here picks up the shared commands and skills automatically, with no
per-person install step.

The plugin itself lives in the orchestration repo at
`plugins/humareso-commands/`, and the marketplace manifest is
`.claude-plugin/marketplace.json` in `humareso/humareso-ecosystem`. It provides:

- **Build and PR pipeline:** `/full-send`, `/quick-build`, `/pr-follow-through`,
  `/pr-follow`, `/test-coverage`
- **Git and Jira:** `/git-overview`, `/git-status`, `/jira-cleanup`
- **Reporting:** `/client-insights`, `/card-schedule`, `/award-g2`
- **Skills** (these self-trigger on their description, not only on invocation):
  `/brand`, `/handoff`, `/job-lookup`, `/time-tracking`, `/unclog-ci`,
  `/generate-video`

If the commands do not resolve, add the marketplace and install:

```bash
claude plugin marketplace add humareso/humareso-ecosystem --sparse .claude-plugin plugins
claude plugin install humareso-commands@humareso
```

Watch the naming. `add` takes the **GitHub repo path**
(`humareso/humareso-ecosystem`). Every command after that takes the
**marketplace name** (`humareso`), which comes from the `name` field inside
`marketplace.json` rather than from the repo name. So it is
`install humareso-commands@humareso`, not `@humareso-ecosystem`.

To pick up plugin changes after they land upstream:

```bash
claude plugin marketplace update humareso
claude plugin update humareso-commands@humareso
claude plugin update humareso-commands@humareso --scope project
```

**The `@humareso` suffix is required.** Without it the CLI reports
`Plugin "humareso-commands" not found`, which reads like the plugin was never
installed. It is installed; the bare name simply does not resolve.

**Refreshing the marketplace is not enough on its own.** `marketplace update`
pulls the new version into the cache, but `installed_plugins.json` keeps
pinning the old one until `plugin update` moves it. Check what is actually
pinned before concluding an update worked:

```bash
python3 -c "import json,os;d=json.load(open(os.path.expanduser('~/.claude/plugins/installed_plugins.json')));[print(e['scope'],e['version']) for e in d['plugins']['humareso-commands@humareso']]"
```

**There are usually two entries, user and project, and `plugin update` moves
one per invocation.** Hence the two update lines above. Restart to apply.

Four things that cause "the command is missing" reports:

1. **The marketplace serves the default branch.** A command added on a branch
   whose PR is still open will not appear, however many times you reinstall.
2. **`humareso/humareso-ecosystem` is private.** A teammate needs git access to
   it before `marketplace add` can clone, otherwise the add fails at the clone
   step rather than reporting a missing plugin.
3. **The pinned version is stale** — see above. The giveaway is that *some*
   commands work and newer ones do not.
4. **A personal copy in `~/.claude/commands/` shadows the plugin.** Personal
   commands win, so a command migrated into the plugin keeps resolving to
   whatever stale copy is still sitting in that directory, and edits to the
   plugin version appear to do nothing. Delete the personal copy after
   migrating. This also masks cause 3: the shadowed commands keep working, so
   the only symptom is that a genuinely new command is missing.
