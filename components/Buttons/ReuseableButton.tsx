/* eslint-disable quotes */
import { GestureResponderEvent, StyleSheet, Text } from "react-native";
import React from "react";
import { SHADOWS, SIZES } from "../../constants/theme";
import { Button, MD2Colors } from "react-native-paper";

interface ButtonProp {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  btnText?: string | number;
  textColor?: string;
  width?: number | string;
  backgroundColor?: string;
  borderWidth?: string | number;
  borderColor?: string | number;
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
      mode="elevated"
      textColor={textColor}
      buttonColor={backgroundColor}
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
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: SIZES.small,
    borderWidth: borderWidth,
    borderColor: borderColor,
  }),
  btnText: {
    fontSize: SIZES.medium,
    textTransform: "capitalize",
    fontFamily: "Raleway-Regular",
    fontWeight: "700",
  },
});
