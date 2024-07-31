// FingerprintScanner.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import FingerprintSvg from '../../assets/images/fingerprint.svg';
import LockSvg from '../../assets/images/lock.svg';
import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { RootStackParamList } from '../../infrastructure/navigation/side.navigator';
import { useFocusEffect } from '@react-navigation/native';
import Error from '../../components/error/error.component';
import { i18n } from '../../i18n';
import SimpleScreen from '../../components/simple-screen/simple-screen.component';
import {
  Container,
  InstructionText,
  IconButton,
  AnimatedBackground,
} from './lock-screen.styles';
import { useTheme } from 'styled-components';

const FingerprintScanner: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const scale = useSharedValue(1);
  const [error, setError] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        // Prevent back button on Android
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.5, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true,
    );
  }, [scale]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    setError(false);

    setTimeout(() => {
      const success = Math.random() < 0.7;
      if (success) {
        navigation.canGoBack()
          ? navigation.goBack()
          : navigation.reset({
              index: 0,
              routes: [{ name: 'HomeScreen' }],
            });
      } else {
        setError(true);
      }
    }, 500);
  };

  return (
    <SimpleScreen>
      <Container flex={0.9}>
        <LockSvg width={100} height={100} fill={theme.colors.primary} />
      </Container>
      <Container flex={1} justifyContent="flex-end" marginBottom={80}>
        <InstructionText>{i18n.t('appLocked')}</InstructionText>

        {error && <Error errorText={i18n.t('errorFingerprint')} />}
        <AnimatedBackground style={animatedStyle} />
        <IconButton onPress={handlePress}>
          <FingerprintSvg
            width={50}
            height={50}
            fill={theme.colors.labelPrimary}
          />
        </IconButton>
      </Container>
    </SimpleScreen>
  );
};

export default FingerprintScanner;
