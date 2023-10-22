import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import {useFonts} from 'expo-font'
import { useCallback } from 'react';
import * as Splashscreen from 'expo-splash-screen'
import UseGetFonts from '../../Hooks/useGetFonts';
import commonStyles from '../../assets/common-styles';

const Home= ()=>  {
  const [fontLoaded,error] = UseGetFonts()

  const onLayoutRootView = useCallback(async() => {
    if(fontLoaded){
      await Splashscreen.hideAsync()
    }
  },[fontLoaded, error])

  if(!fontLoaded || error){
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Home to react native</Text>
      <Pressable 
        style={styles.primaryButton} 
        onPress={() => navigation.navigate('Profile')}
      >
        <Text>Go to Profile</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

export default Home
// component uniques style
const styles = StyleSheet.create({
  textStyle : {
    fontFamily: "ralewayBold",
    fontSize: 23,
  },
  ...commonStyles
});




