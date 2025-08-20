import React from 'react';
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { HUMARESO_COLORS } from '../../colors';

export interface ButtonProps extends Omit<ChakraButtonProps, 'colorScheme'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  children,
  ...props 
}) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          bg: HUMARESO_COLORS.red.primary,
          color: HUMARESO_COLORS.text.light,
          _hover: { bg: HUMARESO_COLORS.red.muted },
          _active: { bg: HUMARESO_COLORS.red.dark },
        };
      case 'secondary':
        return {
          bg: HUMARESO_COLORS.navy.primary,
          color: HUMARESO_COLORS.text.light,
          _hover: { bg: HUMARESO_COLORS.navy.black },
          _active: { bg: HUMARESO_COLORS.navy.black },
        };
      case 'outline':
        return {
          bg: 'transparent',
          color: HUMARESO_COLORS.red.primary,
          border: `2px solid ${HUMARESO_COLORS.red.primary}`,
          _hover: { 
            bg: HUMARESO_COLORS.red.light,
            color: HUMARESO_COLORS.red.primary 
          },
        };
      case 'ghost':
        return {
          bg: 'transparent',
          color: HUMARESO_COLORS.navy.primary,
          _hover: { bg: HUMARESO_COLORS.navy.light },
        };
      case 'danger':
        return {
          bg: HUMARESO_COLORS.red.dark,
          color: HUMARESO_COLORS.text.light,
          _hover: { bg: HUMARESO_COLORS.red.muted },
        };
      default:
        return {};
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { px: 3, py: 2, fontSize: 'sm' };
      case 'lg':
        return { px: 8, py: 4, fontSize: 'lg' };
      default: // md
        return { px: 6, py: 3, fontSize: 'md' };
    }
  };

  return (
    <ChakraButton
      {...getButtonStyles()}
      {...getSizeStyles()}
      borderRadius="md"
      fontWeight="semibold"
      transition="all 0.2s"
      {...props}
    >
      {children}
    </ChakraButton>
  );
};
