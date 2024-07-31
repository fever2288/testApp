import React, { useEffect, useState, useCallback, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { getWallets } from '../../redux/modules/wallet/actions';
import { AppState } from 'react-native';
import BaseScreen from '../../components/base-screen/base-screen.component';
import { useNavigation } from '@react-navigation/native';
import ContentComponent from './ui/content-component.ui';
import { useTheme } from 'styled-components';
import { RootState } from '../../redux';
import HeaderComponent from './ui/header-component.ui';
import MiddleComponent from './ui/middle-component';
import { AppDispatch } from '../../redux/store';

// Define props interface for the component
interface HomeScreenProps extends PropsFromRedux {}
type PropsFromRedux = ConnectedProps<typeof connector> & {
  dispatch: AppDispatch;
};

// Connects the component to the Redux store
const HomeScreen: React.FC<HomeScreenProps> = ({
  wallets,
  error,
  isInternetOn,
  dispatch,
}) => {
  const navigation = useNavigation<any>();

  // State to track the current state of the application (foreground, background, etc.)
  const [appState, setAppState] = useState(AppState.currentState);
  const [loader, setLoader] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const theme = useTheme();
  const isLoading = useRef(false);

  // Function to navigate to a different screen
  const navigate = (screen: string) => {
    navigation.navigate(screen);
  };

  // Effect to handle app state changes
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        navigate('LockScreen');
      }
      setAppState(nextAppState);
    });

    return () => {
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState]);

  // Function to fetch wallet data
  const getData = useCallback(() => {
    if (!isLoading.current) {
      isLoading.current = true;
      setLoader(true);
      dispatch(
        getWallets({
          onFinish: () => {
            setLoader(false);
            isLoading.current = false;
          },
        }),
      );
    }
  }, [dispatch]);

  // Fetch data when the component mounts
  useEffect(() => {
    getData();
  }, [getData]);

  // Refetch data when internet connectivity changes
  useEffect(() => {
    if (isInternetOn) {
      getData();
    }
  }, [isInternetOn, getData]);

  // Refresh handler for pull-to-refresh functionality
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    setRefreshing(false);
  }, [getData]);

  // Navigate to the Settings screen
  const navigateToScreen = () => {
    navigate('SettingsScreen');
  };

  // Main render method
  return (
    <BaseScreen
      HeaderComponent={<HeaderComponent navigateToScreen={navigateToScreen} />}
      MiddleComponent={<MiddleComponent />}
      // eslint-disable-next-line react-native/no-inline-styles
      headerStyle={{ alignItems: 'flex-start' }}
      ContentComponent={
        <ContentComponent
          data={wallets}
          isLoading={loader}
          theme={theme}
          error={error}
          refreshing={refreshing}
          onRefresh={onRefresh}
          buttonNavigate={() => navigate('AllWalletsScreen')}
        />
      }
      topContainerHeight={330}
    />
  );
};

// Map state from the Redux store to component props
const mapStateToProps = (state: RootState) => ({
  wallets: state.wallet.allWallets,
  error: state.wallet.error,
  isInternetOn: state.phone.isInternetOn,
});

// Connect the component to the Redux store
const connector = connect(mapStateToProps);

export default connector(HomeScreen);
