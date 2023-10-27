/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button, MD2Colors, Text } from "react-native-paper";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./styles";
import { HeightSpacer, ReuseableText } from "../../../components";
import { SIZES } from "../../../constants/theme";
import { Image, View } from "react-native";

const Introductory = ({ navigation }) => {
  return (
    <SafeAreaView style={style.container}>
      <Image
        source={require("../../../assets/images/intro-bg.jpg")}
        style={style.image}
      />
      <View style={style.textArea}>
        <ReuseableText
          text={"Subscription Manager"}
          family={"Raleway-Regular"}
          size={SIZES.xxLarge + 10}
          color={MD2Colors.blue800}
          weight={700}
          align={"left"}
        />
        <HeightSpacer height={10} />
        <ReuseableText
          text={"The best financial assistant for your subscription."}
          family={"Raleway-Regular"}
          size={SIZES.large}
          color={MD2Colors.black}
          weight={700}
          align={"left"}
        />
        <HeightSpacer height={15} />
        <Button
          icon={"forward"}
          mode="elevated"
          style={{ width: SIZES.width / 3 }}
          onPress={() => navigation.navigate("login")}
        >
          <ReuseableText
            text={"Continue."}
            family={"Raleway-Regular"}
            size={SIZES.medium}
            color={MD2Colors.black}
            weight={700}
          />
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Introductory;
