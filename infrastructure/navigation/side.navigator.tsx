import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../../screens/settings/settings.screen';
import LockScreen from '../../screens/lock/lock-screen.screen';
import AllWalletsScreen from '../../screens/all-wallets/all-wallets.screen';
import {
  useFocusEffect,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import SvgArrow from '../../assets/images/arrow.svg';
import CustomTabNavigator from './custom-tab-bar.navigator';
import { useTheme } from 'styled-components';

export type RootStackParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
  LockScreen: undefined;
  AllWalletsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const CustomBackButton = () => {
  const theme = useTheme();
  return (
    <SvgArrow
      width={28}
      height={28}
      fill={theme.colors.primary}
      transform={[{ rotate: '180deg' }]}
    />
  );
};

const HomeStackNavigator: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'HomeScreen' }],
        });
      };
    }, [navigation]),
  );

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="LockScreen"
          component={LockScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={CustomTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            headerTransparent: true,

            headerTitle: '',
            headerBackImage: CustomBackButton,
          }}
        />
        <Stack.Screen
          name="AllWalletsScreen"
          component={AllWalletsScreen}
          options={{
            headerTransparent: true,

            headerTitle: '',
            headerBackImage: CustomBackButton,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;
