// SettingsScreen.styles.ts
import styled from 'styled-components/native';
import { View, Text, ScrollView } from 'react-native';

export const Container = styled(ScrollView)`
  flex: 1;
  padding: 20px;
`;

export const ProfileContainer = styled(View)`
  align-items: center;
  margin-bottom: 60px;
  margin-top: 50px;
`;

export const ProfileName = styled(Text)`
  color: ${({ theme }) => theme.colors.labelDefault};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  font-family: ${({ theme }) => theme.fonts.SFTextSemibold};
  margin-top: 10px;
`;

export const SectionTitle = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.name};
  color: ${({ theme }) => theme.colors.labelPrimary};
  font-family: ${({ theme }) => theme.fonts.SFTextSemibold};
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const BackComponentContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.labelPrimary};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-family: ${({ theme }) => theme.fonts.SFDisplayBold};
`;
