import React from 'react';
import { ImageSourcePropType } from 'react-native';
import {
  Container,
  Flag,
  TextContainer,
  CurrencyText,
  DescriptionText,
  AmountText,
} from './wallet.styles';
import {
  formatNumber,
  getCurrencyName,
} from '../../utils/helperFunctions/currencyFunctions';
import { getFlagsImages } from '../../utils/helperFunctions/helperFunctions';

interface CurrencyCardProps {
  currency: string;
  amount: string;
}

/**
 * WalletCard Component
 *
 * This component displays a card with currency information including the currency flag,
 * name, description, and formatted amount.
 *
 * @param {string} currency - The currency code.
 * @param {string} amount - The amount of currency to display.
 */
const WalletCard: React.FC<CurrencyCardProps> = ({ currency, amount }) => {
  const flagImages: { [key: string]: ImageSourcePropType } = getFlagsImages();
  return (
    <Container>
      <Flag source={flagImages[currency]} />
      <TextContainer>
        <CurrencyText>{currency}</CurrencyText>
        <DescriptionText>{getCurrencyName(currency)}</DescriptionText>
      </TextContainer>
      <AmountText>{formatNumber(amount)}</AmountText>
    </Container>
  );
};

export default WalletCard;
