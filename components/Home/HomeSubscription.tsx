/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable quotes */
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { PropsWithoutRef } from "react";
import { IconButton, MD2Colors, Text } from "react-native-paper";
import { SIZES } from "../../constants/theme";
import HeightSpacer from "../Reuseable/HeightSpacer";
import WidthSpacer from "../Reuseable/WidthSpacer";

const demoData: subscriptionType[] = [
  {
    id: 1,
    name: "Netflix",
    img: require("../../assets/images/netflix.png"),
    daysLeft: 20,
    price: 199,
    duration: "monthly",
    grade: "standard",
  },
  {
    id: 2,
    name: "disney & hotstar",
    img: require("../../assets/images/disney.jpeg"),
    daysLeft: 2,
    price: 10,
    duration: "monthly",
    grade: "premium",
  },
];

interface subscriptionType {
  id: number;
  name: string;
  img: any;
  daysLeft: number;
  price: number;
  duration: "monthly" | "hourly" | "yearly" | "daily";
  grade: "standard" | "super" | "low" | "premium";
}

type PropType = PropsWithoutRef<{
  navigation: {
    navigate: any;
  };
}>;
const HomeSubscription = ({ navigation }: PropType) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate("subscription")}
      >
        <Text style={styles.headerText}>my subscription</Text>
        <IconButton
          icon={"chevron-right"}
          size={SIZES.xLarge + 5}
          style={styles.headerIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.body}
        onPress={() => navigation.navigate("description")}
      >
        <Image source={demoData[0].img} style={styles.bodyIcon} />
        <View style={styles.bodyText}>
          <Text style={styles.bodyPrice}>{demoData[0].price}</Text>
          <View style={styles.bodyDuration}>
            <Text style={styles.bodyPrimaryText}>{demoData[0].name}</Text>
            <Text style={styles.bodySecondaryText}>{demoData[0].duration}</Text>
          </View>
          <View style={styles.bodyRemaining}>
            <View style={styles.bodyRedDot}></View>
            <WidthSpacer width={10} />
            <Text style={styles.bodySecondaryText}>
              {demoData[0].daysLeft} days remaining
            </Text>
          </View>

          <Text style={styles.bodyGradeText}>{demoData[0].grade}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.body}
        onPress={() => navigation.navigate("description")}
      >
        <Image source={demoData[1].img} style={styles.bodyIcon} />
        <View style={styles.bodyText}>
          <Text style={styles.bodyPrice}>{demoData[1].price}</Text>
          <View style={styles.bodyDuration}>
            <Text style={styles.bodyPrimaryText}>{demoData[1].name}</Text>
            <Text style={styles.bodySecondaryText}>{demoData[1].duration}</Text>
          </View>
          <View style={styles.bodyRemaining}>
            <View style={styles.bodyRedDot}></View>
            <WidthSpacer width={10} />
            <Text style={styles.bodySecondaryText}>
              {demoData[1].daysLeft} days remaining
            </Text>
          </View>

          <Text style={styles.bodyGradeText}>{demoData[1].grade}</Text>
        </View>
      </TouchableOpacity>
      <HeightSpacer height={10} />
    </View>
  );
};

export default HomeSubscription;

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
  body: {
    width: "96%",
    height: SIZES.xxLarge * 3.3,
    backgroundColor: MD2Colors.white,
    borderRadius: 7,
    shadowColor: MD2Colors.black,
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
    margin: "2%",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bodyIcon: {
    width: "30%",
    height: "94%",
    margin: "1.5%",
    borderRadius: 5,
  },
  bodyText: {
    width: "60%",
    height: "94%",
    marginHorizontal: "5%",
    marginVertical: "3%",
  },
  bodyPrice: {
    textAlign: "right",
    fontSize: SIZES.medium,
    fontWeight: "700",
  },
  bodyDuration: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 3,
  },
  bodyPrimaryText: {
    fontSize: SIZES.medium,
    fontWeight: "700",
    color: MD2Colors.black,
  },
  bodySecondaryText: {
    fontSize: SIZES.medium,
    fontWeight: "600",
    color: MD2Colors.black,
  },
  bodyRemaining: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 4,
  },
  bodyRedDot: {
    width: 9,
    height: 9,
    backgroundColor: MD2Colors.red500,
    borderRadius: 100,
    marginTop: 8,
  },
  bodyGradeText: {
    marginBottom: 20,
    textAlign: "right",
    fontSize: SIZES.medium,
    fontWeight: "700",
    textTransform: "capitalize",
  },
});
