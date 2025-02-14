import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'Outfit-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Outfit-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Outfit-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Outfit-Thin',
      fontWeight: 'normal',
    },
  },
};

export default theme;
