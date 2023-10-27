/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { StyleSheet, Text } from 'react-native';
import React from 'react';

interface TextProp {
  text?: string,
  family?: string,
  size?: number, 
  color?: string,
  weight?: number,
  align?: string,
}
const ReuseableText = (prop:TextProp) => {
  const {  
    text,
    family,
    size, 
    color,
    weight,
    align} = prop
  return (
    <Text style={styles.textStyle(family, size, color, weight, align)}>{text}</Text>
  );
};

export default ReuseableText;

const styles = StyleSheet.create({
  textStyle: (family: any, size: any, color: any, weight: any, align: any) => ({
    fontFamily: family,
    fontSize: size,
    color: color,
    fontWeight: weight,
    textAlign: align ?? 'left',
  }),
});
