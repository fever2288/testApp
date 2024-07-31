import React, { useState, useRef } from 'react';
import { Animated } from 'react-native';
import ArrowSvg from '../../assets/images/arrow.svg';
import { SvgProps } from 'react-native-svg';
import {
  MenuItemContainer,
  AnimatedFrontView,
  MenuItemContent,
  MenuItemText,
  MenuItemTitle,
  MenuItemSubtitle,
  Divider,
  AnimatedBackView,
} from './flippable-menu-item.styles';

/**
 * Props for the FlippableMenuItem component.
 * @typedef {Object} MenuItemProps
 * @property {string} title - The title of the menu item.
 * @property {string} subtitle - The subtitle of the menu item.
 * @property {function} onPress - Function to call when the menu item is pressed.
 * @property {React.FC<SvgProps>} LeftIcon - The icon component to display on the left.
 * @property {string} iconColor - The color of the icon.
 * @property {React.FC} BackComponent - The component to display on the back of the card.
 */
interface MenuItemProps {
  title: string;
  subtitle: string;
  onPress: () => void;
  LeftIcon: React.FC<SvgProps>;
  iconColor: string;
  BackComponent: React.FC;
}

/**
 * FlippableMenuItem component that displays a front and back component,
 * allowing for a flip animation between them.
 * @param {MenuItemProps} props - The props for the component.
 * @returns {JSX.Element} The rendered FlippableMenuItem component.
 */
const FlippableMenuItem: React.FC<MenuItemProps> = ({
  title,
  subtitle,
  onPress,
  LeftIcon,
  iconColor,
  BackComponent,
}) => {
  const [flipped, setFlipped] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  /**
   * Triggers the flip animation.
   */
  const flipAnimation = () => {
    const toValue = flipped ? 0 : 1;

    Animated.timing(animatedValue, {
      toValue,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      setFlipped(!flipped);
      onPress();
    });
  };

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const animatedFrontStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const animatedBackStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <MenuItemContainer onPress={flipAnimation}>
      <AnimatedFrontView style={animatedFrontStyle}>
        <MenuItemContent>
          <LeftIcon width={26} height={26} fill={iconColor} />
          <Divider />
          <MenuItemText>
            <MenuItemTitle>{title}</MenuItemTitle>
            <MenuItemSubtitle>{subtitle}</MenuItemSubtitle>
          </MenuItemText>
        </MenuItemContent>
        <ArrowSvg width={22} height={22} fill={iconColor} />
      </AnimatedFrontView>
      <AnimatedBackView style={animatedBackStyle}>
        <BackComponent />
      </AnimatedBackView>
    </MenuItemContainer>
  );
};

export default FlippableMenuItem;
