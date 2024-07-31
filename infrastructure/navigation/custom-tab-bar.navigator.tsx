import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';

import HomeIcon from '../../assets/images/navigation/wallet.svg';
import ProductsIcon from '../../assets/images/navigation/star.svg';
import HomeScreen from '../../screens/home/home.screen';
import ProductsScreen from '../../screens/products/products.screen';
import { i18n } from '../../i18n';
import { TabBar, TabButton, TabLabel } from './custom-tab-bar.styles';

const Tab = createBottomTabNavigator();

interface CustomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

/**
 * CustomTabBar Component
 *
 * This component renders a custom bottom tab bar for the navigation.
 *
 * @param {object} state - The navigation state.
 * @param {object} descriptors - The screen descriptors.
 * @param {object} navigation - The navigation object.
 */
const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const theme = useTheme();
  return (
    <TabBar>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const Icon = route.name === 'Home' ? HomeIcon : ProductsIcon;

        return (
          <TabButton
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
          >
            <Icon
              width={28}
              height={28}
              fill={isFocused ? theme.colors.techBlue : theme.colors.systemGray}
            />
            <TabLabel isFocused={isFocused}>{label}</TabLabel>
          </TabButton>
        );
      })}
    </TabBar>
  );
};

/**
 * CustomTabNavigator Component
 *
 * This component sets up the bottom tab navigator with custom styling and behavior.
 */
const CustomTabNavigator: React.FC = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={() => ({
        tabBarActiveTintColor: theme.colors.techBlue,
        headerShown: false,
        tabBarLabelStyle: { fontSize: 20 },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: i18n.t('home') }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{ tabBarLabel: i18n.t('products') }}
      />
    </Tab.Navigator>
  );
};

export default CustomTabNavigator;
