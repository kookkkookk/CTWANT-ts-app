import {StyleSheet, Dimensions} from 'react-native';

export const dimensions = {
  fullWidth: Dimensions.get('window').width,
  fullHeight: Dimensions.get('window').height,
  halfWidth: Dimensions.get('window').width / 2,
};

export const colors  = {
  primary: '#E03F19',
  secondary: '#254B5A',
  tertiary: '#5DA6A7',
  black: '#000000',
  white: '#FFFFFF',
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 'Cochin',
};
