/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */
import styles from "./styles";
import React, { PropsWithoutRef } from "react";
import {
  HeightSpacer,
  HomeHeader,
  ReuseableButton,
  HomeSubscription,
  HomeTrending
} from "../../../components";
import { COLORS, SIZES } from "../../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { Platform, ScrollView, View } from "react-native";
import { MD2Colors } from "react-native-paper";

type HomeProp = PropsWithoutRef<{
  navigation: {
    navigate: any;
  };
}>;
const Home = ({ navigation }: HomeProp) => {
  const logOut = () => {
    FIREBASE_AUTH.signOut();
  };

  return (
        <View style={styles.contain}>
          <SafeAreaView style={styles.container}>
            <ScrollView
              style={styles.scrollView}
              keyboardDismissMode={Platform.OS === "ios" ? "interactive" : "on-drag"}
              showsVerticalScrollIndicator={false}
            >
              <HomeHeader />
              <HeightSpacer height={20} />
              <ReuseableButton
                onPress={() => navigation.navigate("subscription")}
                btnText={"add new subscription"}
                textColor={COLORS.white}
                width={(SIZES.width - 50) / 2.2}
                backgroundColor={MD2Colors.blue400}
                borderWidth={0}
                borderColor={COLORS.secondary}
              />
              <HeightSpacer height={20} />
              <HomeSubscription navigation={navigation} />
              <HeightSpacer height={10} />
              <HomeTrending navigation={navigation} />
              <HeightSpacer height={150} />
            </ScrollView>
          </SafeAreaView>
        </View>
  );
};

export default Home;
