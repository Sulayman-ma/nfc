import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeightSpacer } from '../../../components';

const TrendingItem = ({ route, navigation }) => {
  const { itemName } = route.params;
  return (
    <SafeAreaView>
        <HeightSpacer height={200}/>
      <Text>Trending items - {itemName}</Text>
    </SafeAreaView>
  );
};

export default TrendingItem;

const styles = StyleSheet.create({});
