import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
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
    {/* using the common stylings */}
      <Text style={styles.textStyle}>ome to react native</Text>
      {/* using peculiar styling */}
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




