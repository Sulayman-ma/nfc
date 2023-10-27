/* eslint-disable quotes */
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";
import { MD2Colors } from "react-native-paper";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MD2Colors.blue900,
  },
  input: {
    width: SIZES.width / 2,
    borderRadius: 5,
    height: SIZES.xxLarge,
    backgroundColor: COLORS.blanchedalmond,
    marginVertical: 10,
    justifyContent: "center",
  },
  textArea: {
    width: (SIZES.width / 10) * 9,
    marginLeft: SIZES.width / 20,
  },
});

export default style;
