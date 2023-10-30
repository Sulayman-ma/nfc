/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable quotes */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { PropsWithoutRef } from "react";
import { IconButton, MD2Colors, MD3Colors } from "react-native-paper";
import { SIZES } from "../../constants/theme";
import HeightSpacer from "../Reuseable/HeightSpacer";
import WidthSpacer from "../Reuseable/WidthSpacer";

type PropType = PropsWithoutRef<{
  navigation: {
    navigate: any;
  };
}>;

const demoData = [
  {
    id: 1,
    name: "Spotify",
    img: require("../../assets/images/spotify.png"),
    price: 199,
    duration: "month",
  },
  {
    id: 2,
    name: "Prime Video",
    img: require("../../assets/images/prim.png"),
    price: 29,
    duration: "month",
  },
  {
    id: 3,
    name: "HBO",
    img: require("../../assets/images/hbo.jpeg"),
    price: 29,
    duration: "month",
  },
];
const HomeTrending = ({ navigation }: PropType) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate("trending")}
      >
        <Text style={styles.headerText}>trending now</Text>
        <IconButton
          icon={"chevron-right"}
          size={SIZES.xLarge + 5}
          style={styles.headerIcon}
        />
      </TouchableOpacity>
      <HeightSpacer height={10} />
      <ScrollView
        style={styles.scrollViewContent}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      >
        <TouchableOpacity
          style={styles.content}
          onPress={() =>
            navigation.navigate("trending/item", {
              itemName: demoData[1].name,
            })
          }
        >
          <Image source={demoData[1].img} style={styles.contentImage} />
          <HeightSpacer height={7} />
          <View>
            <Text style={styles.contentName}>{demoData[1].name}</Text>
            <View>
              <Text style={styles.contentPrice}>{demoData[1].price} /</Text>
              <Text style={styles.contentDuration}>{demoData[1].duration}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <WidthSpacer width={10} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("trending/item", {
              itemName: demoData[2].name,
            })
          }
          style={styles.content}
        >
          <Image source={demoData[2].img} style={styles.contentImage} />
          <HeightSpacer height={7} />
          <View>
            <Text style={styles.contentName}>{demoData[2].name}</Text>
            <View>
              <Text style={styles.contentPrice}>{demoData[2].price} /</Text>
              <Text style={styles.contentDuration}>{demoData[2].duration}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <WidthSpacer width={10} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("trending/item", {
              itemName: demoData[0].name,
            })
          }
          style={styles.content}
        >
          <Image source={demoData[0].img} style={styles.contentImage} />
          <HeightSpacer height={7} />
          <View>
            <Text style={styles.contentName}>{demoData[0].name}</Text>
            <View>
              <Text style={styles.contentPrice}>{demoData[0].price} /</Text>
              <Text style={styles.contentDuration}>{demoData[0].duration}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <WidthSpacer width={10} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("trending/item", {
              itemName: demoData[0].name,
            })
          }
          style={styles.content}
        >
          <Image source={demoData[0].img} style={styles.contentImage} />
          <HeightSpacer height={7} />
          <View>
            <Text style={styles.contentName}>{demoData[0].name}</Text>
            <View>
              <Text style={styles.contentPrice}>{demoData[0].price} /</Text>
              <Text style={styles.contentDuration}>{demoData[0].duration}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HomeTrending;

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
  scrollViewContent: {
    flexDirection: "row",
    flex: 1,
  },
  content: {
    width: 110,
    height: 160,
    backgroundColor: MD2Colors.white,
    borderRadius: 7,
    shadowColor: MD2Colors.black,
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
    margin: 2,
  },
  contentImage: {
    width: "80%",
    height: 80,
    marginTop: "10%",
    marginHorizontal: "10%",
    borderRadius: 100,
  },
  contentName: {
    textAlign: "center",
    fontSize: SIZES.medium,
    fontWeight: "800",
  },
  contentPrice: {
    textAlign: "center",
    fontSize: SIZES.small,
    fontWeight: "700",
  },
  contentDuration: {
    textAlign: "center",
    fontSize: SIZES.small,
    color: MD3Colors.neutral20,
    fontWeight: "600",
  },
  contentPriceRange: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
