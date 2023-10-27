import { GestureResponderEvent, StyleSheet, Text } from 'react-native';
import React from 'react';
import { FONT, SHADOWS, SIZES } from '../../constants/theme';
import { Button, MD2Colors } from 'react-native-paper';

interface ButtonProp {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  btnText: string | number;
  textColor: string;
  width: number | string;
  backgroundColor: string;
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
    <Button
      mode="text"
      textColor={textColor}
      buttonColor={MD2Colors.red500}
      onPress={onPress}
      style={[
        styles.btnStyle(width, backgroundColor, borderWidth, borderColor),
        SHADOWS.large,
      ]}
    >
      <Text style={styles.btnText}>{btnText}</Text>
    </Button>
  );
};

export default ReuseableButton;

const styles = StyleSheet.create({
  btnStyle: (width, backgroundColor, borderWidth, borderColor) => ({
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: SIZES.small,
    borderWidth: borderWidth,
    borderColor: borderColor,
  }),
  btnText: {
    fontSize: SIZES.medium,
    textTransform: 'capitalize',
    fontFamily: 'Raleway-Regular',
  },
});
