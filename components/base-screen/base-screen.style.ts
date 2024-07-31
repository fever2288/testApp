import styled, { css } from 'styled-components/native';
import { ImageBackground, View, Animated, ViewStyle } from 'react-native';

export const Container = styled(View)`
  flex: 1;
`;

export const BackgroundImage = styled(ImageBackground)<{
  topContainerHeight: number;
}>`
  justify-content: flex-start;
  height: ${({ topContainerHeight }) => topContainerHeight}px;
  padding-top: 64px;
`;

export const HeaderContainer = styled(View)<{ headerStyle?: object }>`
  flex-direction: row;

  ${({ headerStyle }) => headerStyle && css(headerStyle as any)};
`;

export const HeaderRight = styled(View)`
  flex: 1;
  align-items: flex-end;
  z-index: 1;
`;

export const StyledBigCloudContainer = styled(Animated.View)<{
  shouldCloudsOverlap: boolean;
}>`
  position: absolute;
  margin-top: ${(props) => (props.shouldCloudsOverlap ? '0px' : '40px')};
`;

export const ContentContainer = styled(View)<{
  contentStyle?: ViewStyle;
}>`
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin-top: -24px;
  flex: 1;
  ${({ contentStyle }) => contentStyle && css(contentStyle as any)};
`;

export const MiddleContainer = styled(View)`
  flex: 1;
`;

export const AnimateImageContainer = styled(Animated.View)`
  flex: 1;
  justify-content: flex-end;
`;

export const MiddleWrapper = styled(View)`
  z-index: 1;
`;
