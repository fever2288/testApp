// Fallback currency names mapping
const currencyNames: { [key: string]: string } = {
  USD: 'US Dollars',
  EUR: 'Euro',
  GBP: 'British Pound',
  JPY: 'Japanese Yen',
  RSD: 'Serbian Dinar',
};

/**
 * Gets the full name of a currency based on its code.
 *
 * @param currencyCode - The ISO 4217 currency code.
 * @returns The full name of the currency or an error message if the code is invalid.
 */
export const getCurrencyName = (currencyCode: string): string => {
  try {
    return (
      currencyNames[currencyCode] || `Invalid currency code: ${currencyCode}`
    );
  } catch (error) {
    return `Invalid currency code: ${currencyCode}`;
  }
};
/**
 * Formats a number with thousand separators and decimal places.
 *
 * @param value - The number to format.
 * @param locale - The locale to use for formatting (default is 'en-US').
 * @returns The formatted number as a string.
 */
export const formatNumber = (
  value: number | string,
  locale: string = 'en-US',
  minimumFractionDigits: number = 2,
  maximumFractionDigits: number = 2,
): string => {
  let numberValue: number;

  if (typeof value === 'string') {
    numberValue = parseFloat(value);
  } else {
    numberValue = value;
  }

  if (isNaN(numberValue)) {
    return 'N/A';
  }

  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return formatter.format(numberValue);
};
