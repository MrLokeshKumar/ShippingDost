import React, { useState, useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './navigation/AppNavigator';
import TabNavigator from './navigation/TabNavigator';
import { theme } from './styles/theme';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Outfit-Regular': require('./assets/fonts/Outfit-Regular.ttf'),
        'Outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
        'Outfit-Light': require('./assets/fonts/Outfit-Light.ttf'),
        'Outfit-Thin': require('./assets/fonts/Outfit-Thin.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
