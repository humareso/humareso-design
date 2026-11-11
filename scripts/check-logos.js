#!/usr/bin/env node
// Guards the myHR Portal logo tokens (WEB-122): eight artwork URLs on the
// website's public brand path, and the small-mark switch at 32 px. Runs
// against the built package, so `npm test` builds first.
const assert = require('node:assert');
const { HUMARESO_LOGOS, MYHR_SMALL_MARK_MAX_PX, getMyhrLogoUrl } = require('../dist/logos.js');

const variants = ['light', 'dark', 'black', 'white'];
for (const cut of ['primary', 'small']) {
  assert.deepStrictEqual(Object.keys(HUMARESO_LOGOS.myhr[cut]), variants, `myhr.${cut} variants`);
  for (const v of variants) {
    const url = HUMARESO_LOGOS.myhr[cut][v];
    assert.match(url, /^https:\/\/humareso\.com\/brand\/logos\/myhr_logo_[a-z_]+\.svg$/, `myhr.${cut}.${v} url`);
    assert.strictEqual(url.includes('_small_'), cut === 'small', `myhr.${cut}.${v} points at the ${cut} mark`);
  }
}
const all = variants.flatMap((v) => [HUMARESO_LOGOS.myhr.primary[v], HUMARESO_LOGOS.myhr.small[v]]);
assert.strictEqual(new Set(all).size, 8, 'eight distinct myHR files');

assert.strictEqual(MYHR_SMALL_MARK_MAX_PX, 32);
assert.strictEqual(getMyhrLogoUrl(), HUMARESO_LOGOS.myhr.primary.light);
assert.strictEqual(getMyhrLogoUrl('dark', 33), HUMARESO_LOGOS.myhr.primary.dark);
assert.strictEqual(getMyhrLogoUrl('dark', 32), HUMARESO_LOGOS.myhr.small.dark);
assert.strictEqual(getMyhrLogoUrl('black', 16), HUMARESO_LOGOS.myhr.small.black);
assert.strictEqual(getMyhrLogoUrl('white'), HUMARESO_LOGOS.myhr.primary.white);
console.log('check-logos: myHR logo tokens OK');
