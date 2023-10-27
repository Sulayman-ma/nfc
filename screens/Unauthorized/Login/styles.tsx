/* eslint-disable quotes */
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";
import { MD2Colors } from "react-native-paper";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: SIZES.width,
    resizeMode: "cover",
    height: SIZES.height,
  },
  textArea: {
    position: "absolute",
    top: SIZES.height / 4,
    width: SIZES.width - 40,
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    width: SIZES.width / 2 + SIZES.width / 4,
    height: SIZES.xxLarge + 8,
    backgroundColor: MD2Colors.white,
    marginVertical: 10,
    marginLeft: SIZES.width / 12,
    justifyContent: "center",
    borderColor: MD2Colors.blue400,
  },
  accountButtonArea: {
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  iconButton: {
    width: 80,
    height: 40,
    backgroundColor: MD2Colors.white,
  },
  buttonArea: {
    flex: 1,
    justifyContent: "center",
    width: SIZES.width / 2 + SIZES.width / 4,
    marginLeft: SIZES.width / 12,
  },
});

export default style;
