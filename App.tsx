import { Main } from './navigator';
import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';
import UseGetFonts from './hooks/useGetFonts';
import {
  configureFonts,
  customText,
  useTheme,
   PaperProvider,
} from 'react-native-paper';
import { useCallback } from "react";
import * as Splashscreen from 'expo-splash-screen'

function App() {
  const [fontLoaded,error] = UseGetFonts()

  const baseFont = {
    fontFamily: 'Raleway-Regular',
  } as const;

  const baseVariants = configureFonts({ config: baseFont });

  // Then, define custom fonts for different variants

  const customVariants = {
    // Customize individual base variants:
    displayMedium: {
      ...baseVariants.displayMedium,
      fontFamily: 'Raleway-Bold',
    },
    bold: {
      ...baseVariants.bodyMedium,
      fontFamily: 'Raleway-Bold',
    },
    italic: {
      ...baseVariants.bodyMedium,
      fontFamily: 'Raleway-Italic',
    },
    boldItalic: {
      ...baseVariants.bodyMedium,
      fontFamily: 'Raleway-BoldItalic',
    },
  } as const;

  // Finally, merge base variants with your custom tokens
  // and apply custom fonts to your theme.

  const fonts = configureFonts({
    config: {
      ...baseVariants,
      ...customVariants,
    },
  });


  const theme = useTheme();

  const onLayoutRootView = useCallback(async() => {
    if(fontLoaded){
      await Splashscreen.hideAsync()
    }
  },[fontLoaded, error])

  if(!fontLoaded || error){
    return null
  } 
  return (
    <StoreProvider store={store} >
      <PaperProvider>
        <Main/>
      </PaperProvider>
    </StoreProvider>
  )
}

export default App