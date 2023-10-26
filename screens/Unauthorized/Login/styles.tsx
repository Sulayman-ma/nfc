import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants/theme';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightsteelblue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: SIZES.width / 2,
    borderRadius: 5,
    height: SIZES.xxLarge,
    backgroundColor: COLORS.blanchedalmond,
    marginVertical: 10,
    justifyContent: 'center',
  },
});

export default style;
