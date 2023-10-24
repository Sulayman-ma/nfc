import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const tabBarStyle = {
    padding: 20,
    borderRadiuss: 20,
}

const BottomTabNavigator = () => {
  return (
    <View>
      <Text>BottomTabNavigator</Text>
    </View>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})