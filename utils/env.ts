import { Platform } from 'react-native';

// Base URLs for different environments
// It consists of IP adress and PORT number
const liveHost = 'http://192.168.0.19:3005'; // URL for the live environment
const localHost = 'http://192.168.0.19:3005'; // URL for the local development environment

/**
 * Indicates whether the app is running on an Android device.
 *
 * @constant {boolean}
 * @default
 */
export const isAndroid = Platform.OS === 'android';

/**
 * Indicates whether the app is running in development mode.
 *
 * @constant {boolean}
 * @default
 */
export const isDevelopment = __DEV__;

/**
 * The base URL for API requests, based on the current environment.
 *
 * - If the app is running in development mode, `localHost` is used.
 * - Otherwise, `liveHost` is used.
 *
 * @constant {string}
 * @default
 */
export const host = !isDevelopment ? liveHost : localHost;
