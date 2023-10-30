/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable quotes */
import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { IconButton, MD2Colors, Text } from "react-native-paper";
import WidthSpacer from "../Reuseable/WidthSpacer";
import { SIZES } from "../../constants/theme";

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.welcome}>
        <View style={styles.imageHolder}>
          <Image
            source={require("../../assets/images/young-boy-head-avatar.jpg")}
            style={styles.logoImage}
          />
        </View>
        <WidthSpacer width={15} />
        <Text style={styles.welcomeText}>welcome, suleiman!</Text>
      </View>
      <IconButton
        icon="bell"
        mode="outlined"
        iconColor={MD2Colors.blue600}
        size={SIZES.xLarge + 4}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: 20,
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageHolder: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: MD2Colors.blue500,
  },
  logoImage: {
    width: 47,
    height: 47,
    borderRadius: 100,
  },
  welcome: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  welcomeText: {
    marginTop: SIZES.small,
    fontFamily: "Raleway-Regular",
    fontSize: SIZES.large,
    fontWeight: "700",
    textTransform: "capitalize",
  },
});
