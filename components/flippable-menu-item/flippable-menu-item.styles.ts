import styled from 'styled-components/native';
import { TouchableOpacity, Animated } from 'react-native';

export const MenuItemContainer = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  shadow-color: ${({ theme }) => theme.colors.labelPrimary};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 3;
  border-radius: 8px;
  margin-horizontal: 10px;
  margin-bottom: 10px;
`;

export const AnimatedFrontView = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 10px;
`;

export const MenuItemContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MenuItemText = styled.View`
  margin-left: 10px;
`;

export const MenuItemTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.name};
  font-family: ${({ theme }) => theme.fonts.SFDisplayRegular};
  color: ${({ theme }) => theme.colors.labelPrimary};
`;

export const MenuItemSubtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.SFTextRegular};
  color: ${({ theme }) => theme.colors.labelSecondary};
  margin-top: -2px;
`;

export const Divider = styled.View`
  margin-right: 6px;
  margin-left: 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.techBlue};
  height: 40px;
`;

export const AnimatedBackView = styled(Animated.View)`
  backface-visibility: hidden;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
