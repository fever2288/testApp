import styled from 'styled-components';
import { Text, View } from 'react-native';

export const WelcomeText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.SFDisplayBold};
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.labelDefault};
`;

export const CompanyName = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.SFTextRegular};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.labelDefault};
`;

export const Container = styled(View)`
  color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin-top: -20px;
  padding-top: 40px;
  height: 460px;
  margin-horizontal: 8px;
`;

export const Header = styled(View)`
  padding-horizontal: 16px;
  flex-direction: row;
  justify-content: space-between;
`;
export const Spacer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 8px;
  padding-bottom: 16px;
`;

export const CurrenciesText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-family: ${({ theme }) => theme.fonts.SFDisplaySemiBold};
  color: ${({ theme }) => theme.colors.labelPrimary};
`;

export const ButtonLabel = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-family: ${({ theme }) => theme.fonts.SFDisplaySemiBold};
  color: ${({ theme }) => theme.colors.techBlue};
`;

export const InformationText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-family: ${({ theme }) => theme.fonts.SFDisplaySemiBold};
  color: ${({ theme }) => theme.colors.labelPrimary};
`;

export const ContentContainer = styled(View)`
  padding-top: 16px;
  flex: 1;
`;

export const Informations = styled(View)`
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-bottom: 60px;
`;

export const WalletListContainer = styled(View)`
  padding-horizontal: 8px;
`;

export const Wrapper = styled(View)`
  margin-left: 16px;
  margin-top: 40px;
`;
