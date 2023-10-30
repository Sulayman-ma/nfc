/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable quotes */
import { View, Text, ImageBackground, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
const backgroundimage = {
  uri: require("../../../assets/images/pngtree-simple-background-of-multiple-color-gradient-app-interface-materials-png-image_392301.jpg"),
};
const Description = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundimage}
        resizeMode="stretch"
        style={styles.image}
      ></ImageBackground>
    </SafeAreaView>
  );
};

export default Description;
