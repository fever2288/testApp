// FingerprintScanner.styles.ts
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

// Container for the main sections of the screen
export const Container = styled(View)<{
  flex?: number;
  justifyContent?: string;
  marginBottom?: number;
}>`
  flex: ${({ flex }) => flex || 1};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
  align-items: center;
`;

// Text instructions
export const InstructionText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  font-family: ${({ theme }) => theme.fonts.SFDisplaySemiBold};
  color: ${({ theme }) => theme.colors.labelDefault};
  flex: 1;
  text-align: center;
  padding-horizontal: 20px;
`;

// Button for icons
export const IconButton = styled(TouchableOpacity)`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  z-index: 1;
`;

// Animated background for visual effect
export const AnimatedBackground = styled(Animated.View)`
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 60px;
`;
