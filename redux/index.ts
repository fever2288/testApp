import { combineReducers } from 'redux';
import wallet, { WalletsState } from './modules/wallet/reducer';
import phone, { PhoneState } from './modules/phone/reducer';

/**
 * Interface for the root state of the Redux store.
 */
export interface RootState {
  wallet: WalletsState;
  phone: PhoneState;
}

/**
 * Combines all the reducers to create the root reducer.
 * This combined reducer will handle the overall application state.
 *
 * @returns A reducer that invokes every reducer inside the reducers object,
 * and constructs a state object with the same shape.
 */
export default combineReducers({ wallet, phone });
