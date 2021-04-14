const Container = {
  baseStyle: {
    px: { base: 5, xl: 0 },
    mx: 'auto',
  },
  sizes: {
    sm: {
      maxW: 'container.sm',
    },
    md: {
      maxW: 'container.md',
    },
    lg: {
      maxW: '960px',
    },
    xl: {
      maxW: 'container.xl',
    },
    xxl: {
      maxW: '1350px',
    },
  },
  defaultProps: {
    size: 'xxl',
  },
};

export default Container;
