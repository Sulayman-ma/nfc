/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable quotes */
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { PropsWithoutRef } from "react";
import { IconButton } from "react-native-paper";
import { SIZES } from "../../constants/theme";

type PropType = PropsWithoutRef<{
  navigation: {
    navigate: any;
  };
}>;
const HomeUpcoming = ({ navigation }: PropType) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate("upcoming")}
      >
        <Text style={styles.headerText}>upcoming bill</Text>
        <IconButton
          icon={"chevron-right"}
          size={SIZES.xLarge + 5}
          style={styles.headerIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeUpcoming;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "96%",
    marginHorizontal: "2%",
  },
  headerText: {
    fontSize: SIZES.large,
    textTransform: "capitalize",
    fontWeight: "700",
    marginTop: 15,
  },
  headerIcon: {
    fontWeight: "bold",
    width: 20,
  },
});
