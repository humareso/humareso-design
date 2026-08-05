#!/usr/bin/env node
/**
 * Token parity checks between css/humareso-design.css and the shipped JS.
 *
 * The same design token is authored twice — once as a CSS custom property for
 * stylesheet consumers, once in src/typography.ts for the JS/TS API — and
 * nothing keeps the two in step. ENGAGE-2039 had to edit both by hand to move
 * the display tracking from -0.025em to -0.045em; editing only one would have
 * shipped a package whose `.humareso-text-header` and `getTypographyStyles()`
 * disagreed, with no error anywhere.
 *
 * Reads dist/ rather than src/ on purpose: dist is what consumers import, so a
 * committed build that has drifted from src fails here too.
 *
 * Dependency-free, matching scripts/check-fonts.js.
 */

const { readFileSync } = require('node:fs')
const { join, resolve } = require('node:path')

const ROOT = resolve(__dirname, '..')
const css = readFileSync(join(ROOT, 'css', 'humareso-design.css'), 'utf8')

const { HUMARESO_TYPOGRAPHY } = require(join(ROOT, 'dist', 'index.js'))

/* CSS custom property -> the HUMARESO_TYPOGRAPHY key that must match it. */
const PAIRS = {
  '--header-spacing': 'headerSpacing',
  '--display-spacing': 'displaySpacing',
  '--line-height': 'lineHeight',
  '--statement-line-height': 'statementLineHeight',
}

const failures = []

for (const [prop, key] of Object.entries(PAIRS)) {
  const declared = css.match(new RegExp(`${prop}:\\s*([^;]+);`))

  if (!declared) {
    failures.push(`${prop} is not declared in css/humareso-design.css`)
    continue
  }

  const cssValue = declared[1].trim()
  const jsValue = HUMARESO_TYPOGRAPHY[key]

  if (jsValue === undefined) {
    failures.push(`HUMARESO_TYPOGRAPHY.${key} is missing, but ${prop} declares '${cssValue}'`)
    continue
  }

  if (String(jsValue) !== cssValue) {
    failures.push(
      `${prop} is '${cssValue}' but HUMARESO_TYPOGRAPHY.${key} is '${jsValue}' — ` +
        `stylesheet and JS consumers would render differently`,
    )
  }
}

if (failures.length) {
  console.error('Token checks failed:\n' + failures.map((f) => `  - ${f}`).join('\n'))
  process.exit(1)
}

console.log(`Token checks passed: ${Object.keys(PAIRS).length} CSS/JS token pairs agree.`)
