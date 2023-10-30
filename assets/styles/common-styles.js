/* eslint-disable quotes */
import { StyleSheet } from "react-native";
import { MD2Colors } from "react-native-paper";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MD2Colors.white,
    width: "100%",
  },
  textStyle: {
    fontSize: 23,
    fontWeight: "900",
    color: MD2Colors.white,
  },
  primaryButton: {
    marginBottom: 20,
    borderRadius: 30,
    color: MD2Colors.white,
    padding: 15,
    backgroundColor: MD2Colors.black,
  },
});

export default commonStyles;
