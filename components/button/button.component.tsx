import React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from 'react-native';

import Loader from '../loader/loader.component';
import { Container, ButtonText } from './button.styles';

/**
 * Props for the Button component.
 * @typedef {Object} ButtonProps
 * @property {string} [label] - The text to display on the button.
 * @property {function} onPress - Function to call when the button is pressed.
 * @property {boolean} [loading] - If true, show a loading indicator instead of the button label.
 * @property {boolean} [disabled] - If true, disable the button.
 * @property {ViewStyle|ViewStyle[]} [containerStyle] - Style(s) to apply to the button container.
 * @property {TextStyle|TextStyle[]|React.ReactNode} [textStyle] - Style(s) or custom component to apply to the button text.
 * @property {React.ReactNode} [children] - Custom children to display inside the button.
 */
type ButtonProps = {
  label?: string;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  containerStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[] | React.ReactNode;
  children?: React.ReactNode;
};

let throttled = false;

/**
 * Customizable base button component, which does not allow the button to be
 * accidentally double-tapped within 200 ms.
 * @param {ButtonProps & TouchableOpacityProps} props - The props for the component.
 * @returns {JSX.Element} The rendered Button component.
 */
const Button: React.FC<ButtonProps & TouchableOpacityProps> = (props) => {
  const {
    label,
    onPress,
    loading = false,
    disabled = false,
    containerStyle,
    textStyle,
    children,
    ...rest
  } = props;

  /**
   * Makes sure the onPress event cannot be fired twice within 200 ms.
   * @param {GestureResponderEvent} event - The press event.
   */
  const onButtonPress = (event: GestureResponderEvent) => {
    if (!throttled) {
      throttled = true;

      setTimeout(() => {
        throttled = false;
      }, 200);

      if (onPress) {
        onPress(event);
      }
    }
  };

  /**
   * Renders the button label, either as a styled text or a custom component.
   * @returns {React.ReactNode} The rendered label.
   */
  const renderLabel = () => {
    if (React.isValidElement(textStyle)) {
      return React.cloneElement(textStyle, {}, label);
    } else {
      return (
        <ButtonText customStyle={textStyle} disabled={disabled}>
          {label}
        </ButtonText>
      );
    }
  };

  return (
    <Container
      customStyle={containerStyle}
      onPress={onButtonPress}
      disabled={disabled}
      {...rest}
    >
      {loading ? <Loader color="white" /> : children || renderLabel()}
    </Container>
  );
};

export default Button;
