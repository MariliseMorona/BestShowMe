import { DefaultTheme, Theme as NavigationTheme } from '@react-navigation/native';

const theme = {
  colors: {
    white: '#ffffff',
    pink: '#ef3b65',
    blue: '#96cbe8',
    purple: '#97a0ec',
    purpleLight: '#a4adf1',
    text: '#000000',
  },
  fonts: {
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    bold: 'Inter_700Bold',
  }
};

export const navigationTheme: NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.purple,
    background: theme.colors.purple,
    card: theme.colors.white,
    text: theme.colors.text,
  },
};

export type ThemeType = typeof theme;
export default theme;