import {StyleSheet} from 'react-native';
import {colors} from '../base';

export const safeAreaView = StyleSheet.create({
  top: {
    flex: 0,
    backgroundColor: colors.primary,
    position: 'relative',
    zIndex: 9999,
  },
});
