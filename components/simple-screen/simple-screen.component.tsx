import React, { ReactNode } from 'react';
import { useTheme } from 'styled-components';
import { StyledImageBackground } from './simple-screen.styles';

interface SimpleScreenProps {
  children: ReactNode;
}

/**
 * SimpleScreen Component
 *
 * This component provides a screen with a background image. It uses the theme's
 * full background image asset and displays any children components over it.
 *
 * @param {ReactNode} children - The child components to render inside the screen.
 */
const SimpleScreen: React.FC<SimpleScreenProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <StyledImageBackground
      source={theme.assets.fullBackground}
      resizeMode="stretch"
    >
      {children}
    </StyledImageBackground>
  );
};

export default SimpleScreen;
