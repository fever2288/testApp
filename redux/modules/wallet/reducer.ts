import {
  GET_WALLETS,
  GET_WALLETS_SUCCESS,
  GET_WALLETS_FAIL,
  WalletsActionTypes,
} from './actions';
import { Wallet } from '../../../types/wallet.types';

/**
 * Interface for the Wallets state.
 */
export interface WalletsState {
  allWallets: Wallet[];
  error: boolean | string;
}

/**
 * Initial state for the wallets reducer.
 */
const initialState: WalletsState = {
  allWallets: [],
  error: false,
};

/**
 * Reducer function for handling wallet-related actions.
 *
 * @param state - The current state of wallets.
 * @param action - The action being dispatched.
 * @returns The new state of wallets.
 */
export default function walletsReducer(
  state: WalletsState = initialState,
  action: WalletsActionTypes,
): WalletsState {
  const { payload, type } = action;

  switch (type) {
    case GET_WALLETS:
      return {
        ...state,
        allWallets: [],
        error: false,
      };
    case GET_WALLETS_SUCCESS:
      return {
        ...state,
        allWallets: payload.allWallets,
      };
    case GET_WALLETS_FAIL:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
}
