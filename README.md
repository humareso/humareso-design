# Humareso Design System

A shared design system for Humareso front-end applications, designed to work seamlessly with Chakra UI v2.

## Features

- 🎨 **Color System**: Comprehensive color palette with semantic variants
- 🔘 **Button Components**: Pre-styled buttons using design system colors
- 🎭 **Chakra Theme**: Extended Chakra UI theme with design system integration
- 📝 **Typography**: Consistent text styles and variants
- 🖼️ **Logos**: Brand assets and utilities

## Installation

```bash
npm install @rhabit/humareso-design
```

## Usage with Chakra UI

### 1. Theme Integration

```tsx
import { ChakraProvider } from '@chakra-ui/react';
import { humaresoTheme } from '@rhabit/humareso-design';

function App() {
  return (
    <ChakraProvider theme={humaresoTheme}>
      {/* Your app content */}
    </ChakraProvider>
  );
}
```

### 2. Using Design System Colors

```tsx
import { Box, Text } from '@chakra-ui/react';
import { HUMARESO_COLORS } from '@rhabit/humareso-design';

function MyComponent() {
  return (
    <Box bg={HUMARESO_COLORS.red.primary}>
      <Text color={HUMARESO_COLORS.text.light}>
        Hello World
      </Text>
    </Box>
  );
}
```

### 3. Using Design System Buttons

```tsx
import { Button } from '@rhabit/humareso-design';

function MyForm() {
  return (
    <div>
      <Button variant="primary" size="lg">
        Submit
      </Button>
      <Button variant="outline" size="md">
        Cancel
      </Button>
    </div>
  );
}
```

### 4. Color Utilities

```tsx
import { getColor, getRedColor } from '@rhabit/humareso-design';

// Get any color by path
const primaryRed = getColor('red.primary');

// Get specific color variants
const darkRed = getRedColor('dark');
```

## Color Palette

### Primary Colors
- **Red**: Primary brand color with light/dark variants
- **Navy**: Secondary brand color for text and backgrounds

### Semantic Colors
- **Text**: Dark, medium, light variants for typography
- **Accent**: Orange, yellow-green, green, teal, purple for highlights

## Button Variants

- **primary**: Red background with white text
- **secondary**: Navy background with white text  
- **outline**: Red border with transparent background
- **ghost**: Transparent with navy text
- **danger**: Dark red for destructive actions

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode for development
npm run dev
```

## Publishing

```bash
npm publish
```

## License

MIT
