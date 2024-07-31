import { Alert } from 'react-native';

/**
 * Retrieves a collection of flag images mapped by their currency codes.
 *
 * @function
 * @returns {Object} An object where keys are currency codes and values are
 * image modules for the corresponding flag.
 *
 */
export const getFlagsImages = () => {
  const flagImages = {
    USD: require('../../assets/images/flags/USD.png'),
    EUR: require('../../assets/images/flags/EUR.png'),
    GBP: require('../../assets/images/flags/GBP.png'),
    RSD: require('../../assets/images/flags/RSD.png'),
    JPY: require('../../assets/images/flags/JPY.png'),
  };
  return flagImages;
};

/**
 * Displays an alert dialog with a specified title and subtitle.
 *
 * @function
 * @param {string} title - The title of the alert.
 * @param {string} subtitle - The subtitle or message body of the alert.
 *
 */
export const showAlert = (title: string, subtitle: string) => {
  Alert.alert(title, subtitle);
};
