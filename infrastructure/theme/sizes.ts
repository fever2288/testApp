/**
 * Defines the shape of the sizes object for the theme.
 */
interface ThemeSizes {
  readonly navigationHeight: string;
}

/**
 * Sizes used in the theme.
 *
 * @property {string} navigationHeight - The height of the navigation bar.
 */
export const sizes: ThemeSizes = {
  navigationHeight: '89px',
} as const;
