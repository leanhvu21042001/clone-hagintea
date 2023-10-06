import { ComponentStyleConfig } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    VT323: {
      fontFamily: 'VT323',
      color: '#276955',
    },
    haginTeaFilledButton: {
      size: 'lg',
      color: '#fff',
      borderColor: '#00264b',
      backgroundColor: '#00264b',
      padding: { base: '10px 38px' },
      margin: { base: '17px 0 12px' },
      borderRadius: 5,
      _hover: { backgroundColor: '#DDB40D', borderColor: '#DDB40D' },
    },
    haginTeaOutlineButton: {
      variant: 'outline',
      borderColor: '#fff',
      borderWidth: 2,
      padding: { base: '10px 38px' },
      borderRadius: 2,
      width: 'fit-content',
      _hover: { color: '#000', backgroundColor: '#fff' },
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: '',
  },
};

export default Button;
