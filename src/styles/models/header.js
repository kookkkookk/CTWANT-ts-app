import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../base';

export const headerStyle = StyleSheet.create({
  main: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
});
