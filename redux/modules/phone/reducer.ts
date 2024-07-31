import { SET_CONNECTIVITY_STATUS, PhoneActionTypes } from './actions';

/**
 * Interface for the Phone state.
 */
export interface PhoneState {
  /**
   * Boolean indicating whether the internet is on or off.
   */
  isInternetOn: boolean;
}

/**
 * Initial state for the phone reducer.
 */
const initialPhoneState: PhoneState = {
  isInternetOn: true,
};

/**
 * Reducer function for handling phone-related actions.
 *
 * @param state - The current state of the phone.
 * @param action - The action being dispatched.
 * @returns The new state of the phone.
 */
export default function phoneReducer(
  state: PhoneState = initialPhoneState,
  action: PhoneActionTypes,
): PhoneState {
  switch (action.type) {
    case SET_CONNECTIVITY_STATUS:
      return {
        ...state,
        isInternetOn: action.payload,
      };
    default:
      return state;
  }
}
