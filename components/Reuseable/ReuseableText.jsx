import { StyleSheet, Text } from 'react-native'
import React from 'react'

const ReuseableText = ({text, family, size, color}) => {
  return (
      <Text style={styles.textStyle(family, size, color)}>{text}</Text>
  )
}

export default ReuseableText

const styles = StyleSheet.create({
  textStyle: (family, size, color) => ({
    fontFamily: family,
    fontSize: size,
    color: color
  }),
})