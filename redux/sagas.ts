import walletSagas from './modules/wallet/sagas';
import { all } from 'redux-saga/effects';

/**
 * Accumulates all the sagas from different modules.
 */
const sagaAcumulator = [...walletSagas];

/**
 * Root saga that combines all module-specific sagas.
 * Uses `yield all` to run all sagas concurrently.
 */
export default function* rootSaga() {
  yield all(sagaAcumulator);
}
