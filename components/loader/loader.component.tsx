import React from 'react';
import { ActivityIndicator } from 'react-native';
import { LoaderContainer } from './loader.styles';

interface LoaderProps {
  size?: 'small' | 'large' | number;
  color: string;
  loadingText?: string;
  textStyle?: any;
}

/**
 * Loader Component
 *
 * This component displays a loading indicator with an optional loading text.
 *
 * @param {string | number} size - The size of the loader, can be 'small', 'large', or a number.
 * @param {string} color - The color of the loader.
 * @param {string} [loadingText] - The optional loading text to display below the loader.
 * @param {any} [textStyle] - The optional custom style for the loading text component.
 */
const Loader: React.FC<LoaderProps> = ({
  size = 'small',
  color,
  loadingText,
  textStyle: TextStyleComponent,
}) => {
  return (
    <LoaderContainer>
      <ActivityIndicator size={size} color={color} />
      {loadingText && <TextStyleComponent>{loadingText}</TextStyleComponent>}
    </LoaderContainer>
  );
};

export default Loader;
