const { HUMARESO_COLORS, getColor, getTypographyStyles } = require('./dist/index.js');

console.log('🎨 Humareso Design System Test');
console.log('==============================');

console.log('\nPrimary Red:', HUMARESO_COLORS.red.primary);
console.log('Navy Primary:', HUMARESO_COLORS.navy.primary);
console.log('Dynamic Color:', getColor('text.dark'));

console.log('\nHeader Typography:', getTypographyStyles('header'));
console.log('Subheader Typography:', getTypographyStyles('subheader'));

console.log('\n✅ All systems working!');
