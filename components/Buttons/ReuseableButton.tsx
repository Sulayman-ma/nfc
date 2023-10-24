import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SIZES} from '../../constants/theme';

interface ButtonProp {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  btnText: string | number;
  textColor: string;
  width: number | string;
  backgroundColor: string | number;
  borderWidth: string | number;
  borderColor: string | number;
}
const ReuseableButton = (prop: ButtonProp) => {
  const {
    onPress,
    btnText,
    textColor,
    width,
    backgroundColor,
    borderWidth,
    borderColor,
  } = prop;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor)}>
      <Text style={styles.btnText(textColor)}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ReuseableButton;

const styles = StyleSheet.create({
  btnStyle: (width, backgroundColor, borderWidth, borderColor) => ({
    width: width,
    backgroundColor: backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: SIZES.small,
    borderWidth: borderWidth,
    borderColor: borderColor,
  }),
  btnText: textColor => ({
    fontFamily: 'medium',
    fontSize: SIZES.medium,
    color: textColor,
  }),
});
