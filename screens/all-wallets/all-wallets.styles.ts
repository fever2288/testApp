import styled from 'styled-components/native';
import { TextInput, Text, View } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  padding-top: 100px;
`;

export const SearchInputContainer = styled.View`
  position: relative;
  height: 50px;
  margin-bottom: 16px;
  justify-content: center;
`;

export const StyledSearchInput = styled(TextInput)`
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.techBlue};
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.labelPrimary};
`;

export const PlaceholderText = styled(Text)`
  position: absolute;
  top: 14px;
  left: 10px;
  font-family: ${({ theme }) => theme.fonts.SFTextRegular};
  color: ${({ theme }) => theme.colors.labelPrimary};
  pointer-events: none;
  z-index: 1;
`;

export const FilterContainer = styled(View)`
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
`;

// Label for the slider
export const SliderLabel = styled(Text)`
  color: ${({ theme }) => theme.colors.labelDefault};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-family: ${({ theme }) => theme.fonts.SFDisplayBold};
`;

export const NoWalletsText = styled(Text)`
  margin-top: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-family: ${({ theme }) => theme.fonts.SFTextSemibold};
  text-align: center;
`;
