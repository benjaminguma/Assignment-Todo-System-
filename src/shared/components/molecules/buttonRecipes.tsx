import theme from '@/components/theme';

export const customButtonRecipe = theme.cva({
  base: {
    borderRadius: '10px',
    _hover: {
      bg: 'gray.100',
    },
    display: "flex",
    gap: "2"
  },
  variants: {
    colorScheme: {
      default: {
        bg: 'white',
        _hover: {
          bg: 'white/80',
        },
        color: 'fg1',
      },
      purple: {
        bg: 'purple.800',
        color: 'white',
        _hover: {
          bg: 'purple.700',
        },
      },
      teal: {
        bg: 'teal.500',
        color: 'white',
        _hover: {
          bg: 'teal.400',
        },
      },
      outline: {
        bg: 'white',
        borderWidth: '1px',
        borderColor: 'gray.200',

        _hover: {
          bg: 'gray.50',
        },
      },
      grey: {
        bg: 'gray.100',
        borderWidth: '1px',
        borderColor: 'gray.200',
        _hover: {
          bg: 'gray.50',
        },
      }

    },
    size: {
      md: {
        height: '42px',
      },
      sm: {
        height: '30px',
      },
    },


  },
  defaultVariants: {
    size: 'md',
    colorScheme: 'default',
  },

});



export const iconButtonRecipe = theme.cva({
  base: {
    bg: 'gray.100',
    _hover: {
      bg: 'gray.100',
    },
  },
  variants: {
    size: {
      sm: {
        width: '32px',
        height: '32px',
      },
      md: {
        width: '40px',
        height: '40px',
      },
      lg: {
        width: '46px',
        height: '46px',
      }
    },
    radius: {
      full: {
        borderRadius: 'full',
      },
      md: {
        borderRadius: 'md',
      }
    },
    color: {
      white: {
        bg: "white",
        _hover: {
          bg: "white/80"
        }
      }

    }
  },
  defaultVariants: {
    size: 'md',
    radius: 'full',
  },
});