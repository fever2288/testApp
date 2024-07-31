import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 16px;
  border-radius: 8px;
  shadow-color: ${({ theme }) => theme.colors.shadow};
  shadow-offset: 0px 32px;
  shadow-opacity: 0.1;
  shadow-radius: 9px;
  elevation: 7;
  margin-bottom: 16px;
  margin-right: 8px;
`;

export const Flag = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 16px;
  border-width: 0.2px;
  border-color: ${({ theme }) => theme.colors.labelPrimary};
`;

export const TextContainer = styled.View`
  flex-direction: column;
`;

export const CurrencyText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-family: ${({ theme }) => theme.fonts.SFTextRegular};
  color: ${({ theme }) => theme.colors.labelPrimary};
`;

export const DescriptionText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.name};
  font-family: ${({ theme }) => theme.fonts.SFTextRegular};
  color: ${({ theme }) => theme.colors.systemGray};
`;

export const AmountText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  font-family: ${({ theme }) => theme.fonts.SFDisplayBold};
  color: ${({ theme }) => theme.colors.labelPrimary};
  margin-left: auto;
`;
