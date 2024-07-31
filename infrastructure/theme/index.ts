import { useColorScheme } from 'react-native';
import { fonts, fontSizes } from './fonts';
import { assetsThemeLight, assetsThemeDark } from './assets';
import { colorsLight, colorsDark } from './colors';
import { sizes } from './sizes';

/**
 * Interface for the theme object structure.
 */
interface Theme {
  assets: typeof assetsThemeLight;
  colors: typeof colorsLight;
  fonts: typeof fonts;
  fontSizes: typeof fontSizes;
  sizes: typeof sizes;
}

/**
 * Custom hook to retrieve the theme based on the current color scheme.
 *
 * This hook checks the user's preferred color scheme (light or dark) and returns
 * the corresponding theme object which includes assets, colors, fonts, font sizes, and sizes.
 *
 * @returns {Theme} The theme object corresponding to the current color scheme.
 */
const useTheme = (): Theme => {
  const colorScheme = useColorScheme();

  const lightTheme = {
    assets: assetsThemeLight,
    colors: colorsLight,
  };

  const darkTheme = {
    assets: assetsThemeDark,
    colors: colorsDark,
  };

  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return {
    fonts,
    fontSizes,
    sizes,
    ...theme,
  };
};

export default useTheme;
