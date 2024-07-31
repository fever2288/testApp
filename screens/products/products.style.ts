// ProductsScreen.styles.ts
import styled from 'styled-components/native';
import { View, Text, Image, Animated } from 'react-native';

export const HeaderText = styled(Text)`
  margin-left: 18px;
  font-family: ${({ theme }) => theme.fonts.SFDisplayBold};
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.labelDefault};
`;

export const ContentContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 35px;
`;

export const EmptyScreenImage = styled(Image)`
  margin-bottom: 32px;
`;

export const ComingSoonText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.SFDisplayRegular};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.labelPrimary};
  text-shadow-color: ${({ theme }) => theme.colors.shadow};
  text-shadow-offset: -1px 3px;
  text-shadow-radius: 4px;
`;

export const SubText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.SFTextRegular};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.labelSecondary};
  text-align: center;
  text-shadow-color: ${({ theme }) => theme.colors.shadow};
  text-shadow-offset: -1px 3px;
  text-shadow-radius: 10px;
`;

export const AnimatedContainer = styled(Animated.View)`
  flex: 1;
`;
