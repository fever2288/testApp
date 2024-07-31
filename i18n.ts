import { I18n } from 'i18n-js';
import en from './infrastructure/localization/en';

export const i18n = new I18n({
  en,
});

i18n.defaultLocale = 'en';

i18n.locale = 'en';
