import React, { useEffect, ReactNode } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { connect, ConnectedProps } from 'react-redux';
import { setConnectivityStatus } from '../../redux/modules/phone/actions';
import { RootState, AppDispatch } from '../../redux/store';
import { i18n } from '../../i18n';
import { showAlert } from '../../utils/helperFunctions/helperFunctions';

// Define the props for the component
interface InternetStatusCheckerProps extends PropsFromRedux {
  children: ReactNode;
}

/**
 * InternetStatusChecker Component
 *
 * This component checks the internet connectivity status and updates the Redux store
 * accordingly. It also displays an alert when the internet connection status changes.
 *
 * @param {ReactNode} children - The child components to render.
 * @param {AppDispatch} dispatch - The Redux dispatch function.
 * @param {boolean} isInternetOn - The current internet connection status from the Redux store.
 */
const InternetStatusChecker: React.FC<InternetStatusCheckerProps> = ({
  children,
  dispatch,
  isInternetOn,
}) => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const isInternetAvailable =
        (state.isConnected ?? false) && (state.isInternetReachable ?? false);

      if (isInternetOn !== isInternetAvailable) {
        const message = state.isInternetReachable
          ? i18n.t('yesInternet')
          : i18n.t('noInternet');
        showAlert(i18n.t('internetConnection'), message);
      }
      dispatch(setConnectivityStatus(isInternetAvailable));
    });

    // Cleanup the event listener on component unmount
    return () => {
      unsubscribe();
    };
  }, [dispatch, isInternetOn]);

  return <>{children}</>;
};

/**
 * Maps the Redux state to component props
 *
 * @param {RootState} state - The root state of the Redux store.
 * @returns {object} - An object containing the internet connection status.
 */
const mapStateToProps = (state: RootState) => ({
  isInternetOn: state.phone.isInternetOn,
});

// Connects the component to the Redux store
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector> & {
  dispatch: AppDispatch;
};

// Export the connected component
export default connector(InternetStatusChecker);
