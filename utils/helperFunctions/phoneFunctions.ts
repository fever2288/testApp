import { Dimensions, Platform } from 'react-native';

/**
 * Height of the app's window (excluding status bar and navigation bar).
 *
 * @constant {number}
 */
export const windowHeight = Dimensions.get('window').height;

/**
 * Total height of the device's screen (including status bar and navigation bar).
 *
 * @constant {number}
 */
export const screenHeight = Dimensions.get('screen').height;

/**
 * Calculates the height of the navigation bar on Android devices.
 *
 * On Android, the height of the navigation bar is computed by subtracting
 * the window height from the screen height. On iOS devices, this function
 * returns `0` since navigation bars are typically managed differently.
 *
 * @function
 * @returns {number} The height of the navigation bar. Returns `0` for iOS.
 *
 */
export const getNavigationBarHeight = (): number => {
  const windowHeightFull = Dimensions.get('window').height;
  const screenHeightFull = Dimensions.get('screen').height;

  // Calculate the height of the navigation bar on Android
  const navigationBarHeight =
    Platform.OS === 'android' ? screenHeightFull - windowHeightFull : 0;

  return navigationBarHeight;
};
