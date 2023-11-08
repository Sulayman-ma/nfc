/* eslint-disable quotes */
import { StyleSheet } from "react-native";
import commonStyles from "../../../assets/styles/common-styles";
import { SIZES } from "../../../constants/theme";
import { MD2Colors } from "react-native-paper";

const styles = StyleSheet.create({
  ...commonStyles,
  scrollView: {
    minHeight: SIZES.height,
    width: "90%",
    marginHorizontal: "5%",
  },
  contain: {
    flex: 1,
    backgroundColor: MD2Colors.lightBlue50,
  }
  // ADD COMPONENT SPECIFIC STYLES HERE
});

export default styles;
