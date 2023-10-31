import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { HeightSpacer, TrendingApp } from "../../../components";
import { UseGetTrendingApps } from "../../../hooks";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { getTrending } from "../../../api";
import { SIZES } from "../../../constants/theme";
import { MD2Colors } from "react-native-paper";


const Data=[{
  id: '2',
  image: require('../../../assets/images/disney.jpeg'),
  name: 'Disney Channel',
  price: 20.08,

},
{
  id: '3',
  image: require('../../../assets/images/disney.jpeg'),
  name: 'Disney Channel',
  price: 20.08,

},
{
  id: '4',
  image: require('../../../assets/images/disney.jpeg'),
  name: 'Disney Channel',
  price: 20.08,

},
{
  id: '5',
  image: require('../../../assets/images/disney.jpeg'),
  name: 'Disney Channel',
  price: 20.08,

},
{
  id: '6',
  image: require('../../../assets/images/disney.jpeg'),
  name: 'Disney Channel',
  price: 20.08,

},
{
  id: '7',
  image: require('../../../assets/images/disney.jpeg'),
  name: 'Disney Channel',
  price: 20.08,

},
{
  id: '8',
  image: require('../../../assets/images/disney.jpeg'),
  name: 'Disney Channel',
  price: 20.08,

},
{
  id: '9',
  image: require('../../../assets/images/disney.jpeg'),
  name: 'Disney Channel',
  price: 20.08,

},
]
interface TrendingStateFromReduxType {
  trending: {
    data: [],
    state: string,
  }
}
const TrendingList = ({navigation}) => {
  UseGetTrendingApps()
  

  const { data, state}= useSelector((state: TrendingStateFromReduxType)=> state.trending)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>trending apps</Text>
      </View>
      <HeightSpacer height={20}/>
      <View>
        <FlatList 
        ItemSeparatorComponent ={<HeightSpacer height={10} />}
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <TrendingApp item={item} navigation={navigation}/>}
        />

      </View>
    </SafeAreaView>
  );
};

export default TrendingList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SIZES.height,
  },
  header: {
    width: '100%',
    height: 60,
  },
  headerText: {
    marginTop: 13,
    fontSize: SIZES.xLarge,
    textTransform: 'capitalize',
    fontWeight: '800',
    fontFamily: 'Raleway-Regular',
    marginLeft: 10,
  }
})