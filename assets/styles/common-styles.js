import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightsteelblue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'ralewayBold',
    fontSize: 23,
    fontWeight: '900',
    color: '#ffffff',
  },
  primaryButton: {
    marginBottom: 20,
    borderRadius: 30,
    color: '#ffffff',
    padding: 15,
    backgroundColor: '#1da5cf',
  },
});

export default commonStyles;
