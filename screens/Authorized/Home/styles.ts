/* eslint-disable quotes */
import { StyleSheet } from "react-native";
import commonStyles from "../../../assets/styles/common-styles";
import { SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  ...commonStyles,
  scrollView: {
    minHeight: SIZES.height,
    width: "90%",
    marginHorizontal: "5%",
  },
  // ADD COMPONENT SPECIFIC STYLES HERE
});

export default styles;
