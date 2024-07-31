import { GET_WALLETS, getWalletsSuccess, getWalletsFail } from './actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { ENDPOINT_GET_WALLETS } from '../../../utils/api';
import request from '../../../utils/request';
import { Wallet } from '../../../types/wallet.types';

interface WalletsAction {
  type: typeof GET_WALLETS;
  payload: {
    onFinish: () => void;
  };
}

/**
 * Saga worker function for handling the get wallets action.
 *
 * @param action - The dispatched action containing the onFinish callback.
 */
export function* getWalletsSaga(action: WalletsAction) {
  const { onFinish } = action.payload;

  try {
    /**
     * Make an API request to fetch the wallets.
     */
    const result: Wallet[] = yield call(request, {
      endpoint: ENDPOINT_GET_WALLETS,
    });

    /**
     * Dispatch the success action with the fetched wallets.
     */
    yield put(
      getWalletsSuccess({
        allWallets: result,
      }),
    );
  } catch (error) {
    /**
     * Dispatch the fail action with the error message.
     */
    yield put(getWalletsFail({ error: (error as Error).message }));
  } finally {
    /**
     * Call the onFinish callback.
     */

    onFinish();
  }
}

/**
 * Saga watcher function for the get wallets action.
 * Watches for GET_WALLETS actions and calls getWalletsSaga when one is dispatched.
 */
export function* getWalletsSagaWatcher() {
  yield takeLatest(GET_WALLETS, getWalletsSaga);
}

export default [getWalletsSagaWatcher()];
