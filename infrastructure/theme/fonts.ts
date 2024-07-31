/**
 * Defines the shape of the fonts object for the theme.
 */
interface ThemeFonts {
  readonly SFDisplayRegular: string;
  readonly SFDisplaySemiBold: string;
  readonly SFDisplayBold: string;
  readonly SFTextRegular: string;
  readonly SFTextSemibold: string;
}

/**
 * Defines the shape of the font sizes object for the theme.
 */
interface ThemeFontSizes {
  readonly title: string;
  readonly caption: string;
  readonly subtitle: string;
  readonly body: string;
  readonly name: string;
  readonly medium: string;
  readonly small: string;
}

/**
 * Font families used in the theme.
 *
 * @property {string} SFDisplayRegular - The regular font for display text.
 * @property {string} SFDisplaySemiBold - The semi-bold font for display text.
 * @property {string} SFDisplayBold - The bold font for display text.
 * @property {string} SFTextRegular - The regular font for body text.
 * @property {string} SFTextSemibold - The semi-bold font for body text.
 */
export const fonts: ThemeFonts = {
  SFDisplayRegular: 'SF-Pro-Display-Regular',
  SFDisplaySemiBold: 'SF-Pro-Display-Semibold',
  SFDisplayBold: 'SF-Pro-Display-Bold',
  SFTextRegular: 'SF-Pro-Text-Regular',
  SFTextSemibold: 'SF-Pro-Text-Semibold',
} as const;

/**
 * Font sizes used in the theme.
 *
 * @property {string} title - The font size for titles.
 * @property {string} caption - The font size for captions.
 * @property {string} subtitle - The font size for subtitles.
 * @property {string} body - The font size for body text.
 * @property {string} name - The font size for names.
 * @property {string} medium - The medium font size.
 * @property {string} small - The small font size.
 */
export const fontSizes: ThemeFontSizes = {
  title: '34px',
  caption: '23px',
  subtitle: '20px',
  body: '17px',
  name: '15px',
  medium: '14px',
  small: '12px',
} as const;
