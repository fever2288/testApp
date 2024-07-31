import React, { FC, useRef, useCallback, ReactElement } from 'react';
import { Image, ViewStyle, Animated, Easing } from 'react-native';
import { useTheme } from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';
import {
  Container,
  BackgroundImage,
  HeaderContainer,
  HeaderRight,
  StyledBigCloudContainer,
  ContentContainer,
  MiddleContainer,
  AnimateImageContainer,
  MiddleWrapper,
} from './base-screen.style';

interface BaseScreenProps {
  headerStyle?: ViewStyle;
  HeaderComponent?: ReactElement;
  MiddleComponent?: ReactElement;
  ContentComponent?: ReactElement;
  topContainerHeight: number;
  contentStyle?: ViewStyle;
  shouldCloudsOverlap?: boolean;
}

/**
 * BaseScreen is a functional component that provides a structured layout for screens.
 * It includes an optional header, middle, and content component.
 * It also features animated cloud images that slide into view when the screen is focused.
 *
 * @param {BaseScreenProps} props - Properties passed to configure the BaseScreen component.
 * @returns {ReactElement} The BaseScreen component.
 */
const BaseScreen: FC<BaseScreenProps> = ({
  headerStyle,
  HeaderComponent,
  MiddleComponent,
  ContentComponent,
  topContainerHeight,
  contentStyle,
  shouldCloudsOverlap = false,
}) => {
  const theme = useTheme();
  const slideFromRightToLeft = useRef(new Animated.Value(1000)).current;
  const slideFromBottomToTop = useRef(new Animated.Value(1000)).current;

  useFocusEffect(
    useCallback(() => {
      slideFromRightToLeft.setValue(1000);

      Animated.timing(slideFromRightToLeft, {
        toValue: 0,
        duration: 1000,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start();

      slideFromBottomToTop.setValue(1000);

      Animated.timing(slideFromBottomToTop, {
        toValue: 0,
        duration: 1000,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start();
    }, [slideFromRightToLeft, slideFromBottomToTop]),
  );

  return (
    <Container>
      <BackgroundImage
        topContainerHeight={topContainerHeight}
        source={theme.assets.backgroundImage}
        resizeMode="cover"
      >
        <HeaderContainer headerStyle={headerStyle}>
          {HeaderComponent}
          <HeaderRight>
            <AnimateImageContainer
              style={{ transform: [{ translateX: slideFromRightToLeft }] }}
            >
              <Image source={theme.assets.smallCloud} />
            </AnimateImageContainer>
          </HeaderRight>
        </HeaderContainer>
        <MiddleContainer>
          {MiddleComponent && <MiddleWrapper>{MiddleComponent}</MiddleWrapper>}
          <StyledBigCloudContainer
            shouldCloudsOverlap={shouldCloudsOverlap}
            style={{
              transform: [{ translateY: slideFromBottomToTop }],
            }}
          >
            <Image source={theme.assets.bigCloud} />
          </StyledBigCloudContainer>
        </MiddleContainer>
      </BackgroundImage>
      <ContentContainer contentStyle={contentStyle}>
        {ContentComponent}
      </ContentContainer>
    </Container>
  );
};

export default BaseScreen;
