#!/usr/bin/env node
/**
 * Font integrity checks for css/fonts.css.
 *
 * Two failure modes, both silent in a browser:
 *
 *   1. A utility class names a font-family that no @font-face in this package
 *      provides. `.haboro-font` did exactly this — it named `haboro-condensed`,
 *      which only resolved where Adobe Typekit's script happened to be loaded,
 *      and fell through to Elza everywhere else. Nothing errors; the type is
 *      just wrong.
 *
 *   2. An @font-face points at a file that is not in fonts/. The deploy
 *      workflow syncs that directory to the CDN, so a missing file is a 403 at
 *      runtime rather than a build failure.
 *
 * Dependency-free on purpose: this package has no test framework, and adding
 * one to guard two rules would cost more than it protects.
 */

const { readFileSync, existsSync } = require('node:fs')
const { join, resolve, dirname } = require('node:path')

const ROOT = resolve(__dirname, '..')
const CSS_PATH = join(ROOT, 'css', 'fonts.css')
const css = readFileSync(CSS_PATH, 'utf8')

const failures = []

/* Families declared by an @font-face in this package. */
const declared = new Set(
  [...css.matchAll(/@font-face\s*\{[^}]*?font-family:\s*'([^']+)'/g)].map((m) => m[1]),
)

/* Every src: url(...) must resolve to a real file. */
for (const m of css.matchAll(/src:\s*url\('([^']+)'\)/g)) {
  const file = resolve(dirname(CSS_PATH), m[1])
  if (!existsSync(file)) {
    failures.push(`@font-face src does not exist: ${m[1]}`)
  }
}

/*
 * Every family named first in a utility class must be declared above.
 * Later entries in the stack are deliberate fallbacks, so only the first
 * matters.
 */
for (const m of css.matchAll(/\.([a-z-]+font)\s*\{\s*font-family:\s*'([^']+)'/g)) {
  const [, cls, family] = m
  if (!declared.has(family)) {
    failures.push(
      `.${cls} leads with '${family}', which no @font-face in this package declares — ` +
        `it will silently fall back unless an external loader supplies it`,
    )
  }
}

/* The display face the brand specifies must be present. */
if (!declared.has('haboro-condensed')) {
  failures.push("the display face 'haboro-condensed' is not declared")
}

if (failures.length) {
  console.error('Font checks failed:\n' + failures.map((f) => `  - ${f}`).join('\n'))
  process.exit(1)
}

console.log(`Font checks passed: ${declared.size} families declared, all sources present.`)
