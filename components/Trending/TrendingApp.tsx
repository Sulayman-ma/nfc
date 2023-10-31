import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MD2Colors } from 'react-native-paper'
import { SIZES } from '../../constants/theme'

const TrendingApp = ({item, navigation}) => {
  return (
    <TouchableOpacity style={styles.body} onPress={() => navigation.navigate('trending/item', {
        itemName: 'item.name'+item.id
    } )}>
      <Image source={item.image} src={item.image}/>
      <View>
        <Text>"item.name"</Text>
      </View>
    </TouchableOpacity>
  )
}

export default TrendingApp

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginHorizontal: "5%",
        height: 100,
        backgroundColor: MD2Colors.red100,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
})