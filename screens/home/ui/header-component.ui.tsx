import React from 'react';
import Button from '../../../components/button/button.component';
import AccountSvg from '../../../assets/images/account.svg';

interface HeaderComponentProps {
  navigateToScreen: () => void;
}

/**
 * HeaderComponent renders a button with an icon.
 *
 * This component displays a button with an `AccountSvg` icon. When the button is pressed,
 * it triggers the `navigateToScreen` function passed as a prop.
 *
 * @component
 * @param {HeaderComponentProps} props - The props for the component.
 * @returns {JSX.Element} The rendered button component.

 */
const HeaderComponent: React.FC<HeaderComponentProps> = ({
  navigateToScreen,
}) => {
  return (
    <Button
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ marginLeft: 16, marginBottom: 24 }}
      onPress={navigateToScreen}
    >
      <AccountSvg width={34} height={34} />
    </Button>
  );
};

export default HeaderComponent;
