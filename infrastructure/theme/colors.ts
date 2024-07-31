/**
 * Defines the shape of the color palette object for the theme.
 */
interface ThemeColors {
  readonly primary: string;
  readonly secondary: string;
  readonly systemGray: string;
  readonly techBlue: string;
  readonly labelPrimary: string;
  readonly labelSecondary: string;
  readonly labelDefault: string;
  readonly shadow: string;
  readonly error: string;
  readonly text: string;
  readonly navigationShadow: string;
}

/**
 * Color palette for the light theme.
 *
 * @property {string} primary - The primary background color.
 * @property {string} secondary - The secondary background color.
 * @property {string} systemGray - The color for system gray elements.
 * @property {string} techBlue - The color for tech blue elements.
 * @property {string} labelPrimary - The primary label color.
 * @property {string} labelSecondary - The secondary label color.
 * @property {string} labelDefault - The default label color.
 * @property {string} shadow - The shadow color.
 * @property {string} error - The color for error messages and elements.
 * @property {string} text - The default text color.
 * @property {string} navigationShadow - The shadow color for navigation elements.
 */
export const colorsLight: ThemeColors = {
  primary: '#FFFFFF',
  secondary: '#f9f9f9',
  systemGray: '#8E8E93',
  techBlue: '#00BEF0',
  labelPrimary: '#000000',
  labelSecondary: '#3C3C4399',
  labelDefault: '#FFFFFF',
  shadow: '#d1d1cd',
  error: '#fa1414',
  text: '#000',
  navigationShadow: '#1c1c1e',
} as const;

/**
 * Color palette for the dark theme.
 *
 * @property {string} primary - The primary background color.
 * @property {string} secondary - The secondary background color.
 * @property {string} systemGray - The color for system gray elements.
 * @property {string} techBlue - The color for tech blue elements.
 * @property {string} labelPrimary - The primary label color.
 * @property {string} labelSecondary - The secondary label color.
 * @property {string} labelDefault - The default label color.
 * @property {string} shadow - The shadow color.
 * @property {string} error - The color for error messages and elements.
 * @property {string} text - The default text color.
 * @property {string} navigationShadow - The shadow color for navigation elements.
 */
export const colorsDark: ThemeColors = {
  primary: '#000000',
  secondary: '#1c1c1e',
  systemGray: '#8E8E93',
  techBlue: '#00BEF0',
  labelPrimary: '#FFFFFF',
  labelSecondary: '#EBEBF599',
  labelDefault: '#FFFFFF',
  shadow: '#000000',
  error: '#fa1414',
  text: '#000',
  navigationShadow: '#1c1c1e',
} as const;
