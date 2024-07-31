import backgroundImageLight from '../../assets/images/main-background-light.png';
import backgroundImageDark from '../../assets/images/main-background-dark.png';
import bigCloudLight from '../../assets/images/big-cloud-light.png';
import bigCloudDark from '../../assets/images/big-cloud-dark.png';
import emptyStateLight from '../../assets/images/empty-state-light.png';
import emptyStateDark from '../../assets/images/empty-state-dark.png';
import smallCloud from '../../assets/images/small-cloud.png';
import fullBackgroundLight from '../../assets/images/full-background-light.png';
import fullBackgroundDark from '../../assets/images/full-background-dark.png';

// Define the shape of the assets object
interface ThemeAssets {
  backgroundImage: string;
  bigCloud: string;
  emptyState: string;
  fullBackground: string;
  smallCloud: string;
}

/**
 * Common assets shared between light and dark themes.
 */
const commonAssets = {
  smallCloud: smallCloud,
};

/**
 * Assets for the light theme.
 *
 * @property {string} backgroundImage - The background image for the main screen in light theme.
 * @property {string} bigCloud - The big cloud image for the light theme.
 * @property {string} emptyState - The empty state image for the light theme.
 * @property {string} fullBackground - The full background image for the light theme.
 * @property {string} smallCloud - The small cloud image common to both themes.
 */
export const assetsThemeLight: ThemeAssets = {
  backgroundImage: backgroundImageLight,
  bigCloud: bigCloudLight,
  emptyState: emptyStateLight,
  fullBackground: fullBackgroundLight,
  ...commonAssets,
};

/**
 * Assets for the dark theme.
 *
 * @property {string} backgroundImage - The background image for the main screen in dark theme.
 * @property {string} bigCloud - The big cloud image for the dark theme.
 * @property {string} emptyState - The empty state image for the dark theme.
 * @property {string} fullBackground - The full background image for the dark theme.
 * @property {string} smallCloud - The small cloud image common to both themes.
 */
export const assetsThemeDark: ThemeAssets = {
  backgroundImage: backgroundImageDark,
  bigCloud: bigCloudDark,
  emptyState: emptyStateDark,
  fullBackground: fullBackgroundDark,
  ...commonAssets,
};
