/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Main } from './navigator';
// import { Provider as StoreProvider } from 'react-redux';
// import store from './redux/store';
import React from 'react';
import { configureFonts, DefaultTheme, PaperProvider } from 'react-native-paper';
import { useCallback } from 'react';
import * as Splashscreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

function App() {
  const [fontLoaded, error] = useFonts({
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'Raleway-Italic': require('./assets/fonts/Raleway-Italic.ttf'),
    'Raleway-BoldItalic': require('./assets/fonts/Raleway-BoldItalic.ttf'),
    'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
  });

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

  const theme = {
    ...DefaultTheme,
    fonts,
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await Splashscreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded || error) {
    return null;
  }
  return (
    <PaperProvider theme={theme}>
      <Main onLayout={onLayoutRootView} />
    </PaperProvider>
  );
}

export default App;
