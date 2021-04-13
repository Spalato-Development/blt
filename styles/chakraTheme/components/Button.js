import { mode } from '@chakra-ui/theme-tools';

const Button = {
  variants: {
    primary: (props) => ({
      borderRadius: 'sm',
      bg: 'lightBlue',
      color: 'text',
      textTransform: 'uppercase',
      fontSize: 'base',
      transition: 'all .4s',
      letterSpacing: 'wide',
      py: 3,
      px: 5,
      _hover: {
        bg: 'veryLightBlue',
      },
    }),
  },
  defaultProps: {
    variant: 'primary',
  },
};

export default Button;
