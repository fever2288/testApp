import React, { useRef, useCallback } from 'react';
import { Animated } from 'react-native';
import { useTheme } from 'styled-components/native';
import { i18n } from '../../../i18n';
import { useFocusEffect } from '@react-navigation/native';
import {
  ContentContainer,
  EmptyScreenImage,
  ComingSoonText,
  SubText,
  AnimatedContainer,
} from '../products.style';

const ContentComponent: React.FC = () => {
  const theme = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useFocusEffect(
    useCallback(() => {
      fadeAnim.setValue(0);

      // Run the animation when the screen is focused
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]),
  );

  return (
    <AnimatedContainer style={{ opacity: fadeAnim }}>
      <ContentContainer>
        <EmptyScreenImage source={theme.assets.emptyState} />
        <ComingSoonText>{i18n.t('comingSoon')}</ComingSoonText>
        <SubText>{i18n.t('noScreen')}</SubText>
      </ContentContainer>
    </AnimatedContainer>
  );
};

export default ContentComponent;
