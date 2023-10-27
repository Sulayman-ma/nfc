import { StyleSheet, Text } from 'react-native';
import React from 'react';

const ReuseableText = ({ text, family, size, color, weight }) => {
  return (
    <Text style={styles.textStyle(family, size, color, weight)}>{text}</Text>
  );
};

export default ReuseableText;

const styles = StyleSheet.create({
  textStyle: (family, size, color, weight) => ({
    fontFamily: family,
    fontSize: size,
    color: color,
    fontWeight: weight,
  }),
});
