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

const { HUMARESO_TYPOGRAPHY, HUMARESO_COLORS, getColor } = require(join(ROOT, 'dist', 'index.js'))

/* CSS custom property -> the HUMARESO_TYPOGRAPHY key that must match it. */
const PAIRS = {
  '--header-spacing': 'headerSpacing',
  '--display-spacing': 'displaySpacing',
  '--line-height': 'lineHeight',
  '--statement-line-height': 'statementLineHeight',
}

/*
 * CSS custom property -> the HUMARESO_COLORS path that must match it.
 * Colors are authored twice the same way the typography tokens are, and the
 * 2026-08-31 brand reconciliation found the Leave palette had drifted between
 * the two for months with no error anywhere. Same guard, same reason.
 */
const COLOR_PAIRS = {
  '--humareso-red': 'red.primary',
  '--humareso-red-dark': 'red.dark',
  '--humareso-red-light': 'red.light',
  '--humareso-red-muted': 'red.muted',
  '--humareso-navy': 'navy.primary',
  '--humareso-navy-black': 'navy.black',
  '--humareso-navy-light': 'navy.light',
  '--humareso-navy-off-white': 'navy.offWhite',
  '--humareso-orange': 'accent.orange',
  '--humareso-yellow-green': 'accent.yellowGreen',
  '--humareso-green': 'accent.green',
  '--humareso-teal': 'accent.tealMuted',
  '--humareso-teal-accent': 'accent.tealAccent',
  '--humareso-purple': 'accent.purple',
  '--platform-leave': 'platforms.leave.primary',
  '--platform-leave-light': 'platforms.leave.light',
  '--platform-leave-dark': 'platforms.leave.dark',
  '--platform-leave-soft': 'platforms.leave.soft',
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

for (const [prop, path] of Object.entries(COLOR_PAIRS)) {
  const declared = css.match(new RegExp(`${prop}:\\s*([^;]+);`))

  if (!declared) {
    failures.push(`${prop} is not declared in css/humareso-design.css`)
    continue
  }

  const cssValue = declared[1].trim()
  const jsValue = getColor(path)

  if (jsValue === '#000000' && cssValue.toLowerCase() !== '#000000') {
    failures.push(`HUMARESO_COLORS.${path} is missing, but ${prop} declares '${cssValue}'`)
    continue
  }

  if (jsValue.toLowerCase() !== cssValue.toLowerCase()) {
    failures.push(
      `${prop} is '${cssValue}' but HUMARESO_COLORS.${path} is '${jsValue}' — ` +
        `stylesheet and JS consumers would render differently`,
    )
  }
}

if (failures.length) {
  console.error('Token checks failed:\n' + failures.map((f) => `  - ${f}`).join('\n'))
  process.exit(1)
}

console.log(
  `Token checks passed: ${Object.keys(PAIRS).length + Object.keys(COLOR_PAIRS).length} CSS/JS token pairs agree.`,
)
