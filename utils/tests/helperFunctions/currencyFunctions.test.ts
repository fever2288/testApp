import {
  getCurrencyName,
  formatNumber,
} from '../../helperFunctions/currencyFunctions';

describe('getCurrencyName', () => {
  it('should return the correct currency name for valid currency codes', () => {
    expect(getCurrencyName('USD')).toBe('US Dollars');
    expect(getCurrencyName('EUR')).toBe('Euro');
    expect(getCurrencyName('GBP')).toBe('British Pound');
    expect(getCurrencyName('JPY')).toBe('Japanese Yen');
    expect(getCurrencyName('RSD')).toBe('Serbian Dinar');
  });

  it('should return an error message for invalid currency codes', () => {
    expect(getCurrencyName('XYZ')).toBe('Invalid currency code: XYZ');
    expect(getCurrencyName('')).toBe('Invalid currency code: ');
  });

  it('should handle edge cases gracefully', () => {
    expect(getCurrencyName(null as unknown as string)).toBe(
      'Invalid currency code: null',
    );
    expect(getCurrencyName(undefined as unknown as string)).toBe(
      'Invalid currency code: undefined',
    );
  });
});

describe('formatNumber', () => {
  it('should format numbers correctly with default settings', () => {
    expect(formatNumber(1234.56)).toBe('1,234.56');
    expect(formatNumber(1234)).toBe('1,234.00');
  });

  it('should format numbers correctly with different locales', () => {
    expect(formatNumber(1234.56, 'de-DE')).toBe('1.234,56');

    // French locale test adjusted to ignore non-breaking spaces
    const frenchFormatted = formatNumber(1234.56, 'fr-FR').replace(
      /\u202f|\u00a0/g,
      ' ',
    );
    expect(frenchFormatted).toBe('1 234,56');
  });

  it('should format strings correctly', () => {
    expect(formatNumber('1234.56')).toBe('1,234.56');
    expect(formatNumber('1234')).toBe('1,234.00');
  });

  it('should return "N/A" for invalid numbers', () => {
    expect(formatNumber('invalid')).toBe('N/A');
    expect(formatNumber(NaN)).toBe('N/A');
  });

  it('should handle minimum and maximum fraction digits correctly', () => {
    expect(formatNumber(1234.5678, 'en-US', 1, 3)).toBe('1,234.568');
  });
});
