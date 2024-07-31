import React from 'react';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import store from '../redux/store';
import useTheme from '../infrastructure/theme';
import HomeStackNavigator from '../infrastructure/navigation/side.navigator';

import InternetStatusChecker from '../components/internet-status-checker/internet-status-checker.component';

const Index = () => {
  const [fontsLoaded, fontsError] = useFonts({
    'SF-Pro-Display-Bold': require('../assets/fonts/SF-Pro-Display-Bold.otf'),
    'SF-Pro-Display-Regular': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
    'SF-Pro-Display-Semibold': require('../assets/fonts/SF-Pro-Display-Semibold.otf'),
    'SF-Pro-Text-Regular': require('../assets/fonts/SF-Pro-Text-Regular.otf'),
    'SF-Pro-Text-Semibold': require('../assets/fonts/SF-Pro-Text-Semibold.otf'),
  });

  const theme = useTheme();

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }

    /**  const hideNavigationBar = async () => {
      await NavigationBar.setVisibilityAsync('hidden');
    };

    hideNavigationBar();**/
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    // Render nothing and keep splash screen while fonts are loading
    return null;
  }

  return (
    <Provider store={store}>
      <InternetStatusChecker>
        <ThemeProvider theme={theme}>
          <HomeStackNavigator />
        </ThemeProvider>
      </InternetStatusChecker>
    </Provider>
  );
};

export default Index;
