import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

export const TabBar = styled.View`
  flex-direction: row;
  height: ${({ theme }) => theme.sizes.navigationHeight};
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-top-width: 1px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0.1px;
  margin-top: -20px;
  shadow-color: ${({ theme }) => theme.colors.navigationShadow};
  shadow-offset: 0px 4px;
  shadow-opacity: 1;
  shadow-radius: 4px;
  elevation: 15;
`;

export const TabButton = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface TabLabelProps {
  isFocused: boolean;
}

export const TabLabel = styled(Text)<TabLabelProps>`
  color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.techBlue : theme.colors.systemGray};
  margin-top: -2px;
  font-size: 11px;
`;
