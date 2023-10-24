import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const COLORS = {
  primary: '#312651',
  secondary: '#444262',
  tertiary: '#FF7754',

  gray: '#83829A',
  gray2: '#C1C0C8',

  white: '#F3F4F8',
  lightWhite: '#FAFAFC',
};

const FONT = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
  raleway: 'Raleway',
  roboto: 'Roboto',
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

const TEXT = {
  xxSmall: 11,
  xSmall: 13,
  small: 15,
  medium: 17,
  large: 21,
  xLarge: 22,
  xxLarge: 32,
};

export {SHADOWS, SIZES, TEXT, COLORS, FONT};
