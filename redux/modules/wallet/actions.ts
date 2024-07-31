import { Wallet } from '../../../types/wallet.types';

export const GET_WALLETS = 'GET_WALLETS';
export const GET_WALLETS_SUCCESS = 'GET_WALLETS_SUCCESS';
export const GET_WALLETS_FAIL = 'GET_WALLETS_FAIL';

/**
 * Interface for the GetWallets action.
 */
interface GetWalletsAction {
  type: typeof GET_WALLETS;
  payload: {
    onFinish: () => void;
  };
}

/**
 * Interface for the GetWalletsSuccess action.
 */
interface GetWalletsSuccessAction {
  type: typeof GET_WALLETS_SUCCESS;
  payload: {
    allWallets: Wallet[];
  };
}

/**
 * Interface for the GetWalletsFail action.
 */
interface GetWalletsFailAction {
  type: typeof GET_WALLETS_FAIL;
  payload: {
    error: string;
  };
}

/**
 * Union type for wallet-related actions.
 */
export type WalletsActionTypes =
  | GetWalletsAction
  | GetWalletsSuccessAction
  | GetWalletsFailAction;

/**
 * Action creator for initiating the get wallets action.
 *
 * @param param0 - Object containing the onFinish callback.
 * @returns The GetWallets action.
 */
export function getWallets({
  onFinish,
}: {
  onFinish: () => void;
}): GetWalletsAction {
  return {
    type: GET_WALLETS,
    payload: { onFinish },
  };
}

/**
 * Action creator for handling the success of get wallets action.
 *
 * @param param0 - Object containing an array of all wallets.
 * @returns The GetWalletsSuccess action.
 */
export function getWalletsSuccess({
  allWallets,
}: {
  allWallets: Wallet[];
}): GetWalletsSuccessAction {
  return {
    type: GET_WALLETS_SUCCESS,
    payload: { allWallets },
  };
}

/**
 * Action creator for handling the failure of get wallets action.
 *
 * @param param0 - Object containing the error message.
 * @returns The GetWalletsFail action.
 */
export function getWalletsFail({
  error,
}: {
  error: string;
}): GetWalletsFailAction {
  return {
    type: GET_WALLETS_FAIL,
    payload: { error },
  };
}
