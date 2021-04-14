const Container = {
  baseStyle: {
    px: { base: 5, lg: 0 },
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
      maxW: '1400px',
    },
  },
  defaultProps: {
    size: 'xxl',
  },
};

export default Container;
