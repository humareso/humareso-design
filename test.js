const { HUMARESO_COLORS, getColor, getTypographyStyles } = require('./dist/index.js');

console.log('🎨 Humareso Design System Test');
console.log('==============================');

console.log('\nPrimary Red:', HUMARESO_COLORS.red.primary);
console.log('Navy Primary:', HUMARESO_COLORS.navy.primary);
console.log('Dynamic Color:', getColor('text.dark'));

console.log('\nHeader Typography:', getTypographyStyles('header'));
console.log('Subheader Typography:', getTypographyStyles('subheader'));

// Haboro display rules (ENGAGE-2039): kerning + statement line-height
const assert = require('assert');
const { HUMARESO_TYPOGRAPHY } = require('./dist/index.js');
const display = getTypographyStyles('display');
assert.strictEqual(display.letterSpacing, '-0.045em', 'display tracks at -0.045em');
assert.strictEqual(display.lineHeight, 1.05, 'single-line display keeps 1.05');
assert.strictEqual(HUMARESO_TYPOGRAPHY.statementLineHeight, 0.88, 'stacked statements use 0.88');
console.log('\nHaboro display rules:', display.letterSpacing, '/', HUMARESO_TYPOGRAPHY.statementLineHeight);

console.log('\n✅ All systems working!');
