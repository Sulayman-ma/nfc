/* eslint-disable quotes */
import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants/theme";
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
    bottom: 0,
    marginBottom: 60,
    marginHorizontal: 20,
  },
});

export default style;
