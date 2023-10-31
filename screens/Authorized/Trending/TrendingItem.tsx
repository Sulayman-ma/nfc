/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { StyleSheet, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeightSpacer } from "../../../components";

const TrendingItem = ({ route, navigation }) => {
  const { itemName } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <HeightSpacer height={200} />
      <Text>Trending items - {itemName}</Text>
    </SafeAreaView>
  );
};

export default TrendingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
