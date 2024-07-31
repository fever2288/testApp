/**
 * Action type constant for setting connectivity status.
 */
export const SET_CONNECTIVITY_STATUS = 'SET_CONNECTIVITY_STATUS';

/**
 * Interface for the SetConnectivityStatus action.
 */
export interface SetConnectivityStatusAction {
  /**
   * The type of the action, should be 'SET_CONNECTIVITY_STATUS'.
   */
  type: typeof SET_CONNECTIVITY_STATUS;

  /**
   * Payload of the action, indicates the connectivity status.
   */
  payload: boolean;
}

/**
 * Union type for phone-related actions.
 */
export type PhoneActionTypes = SetConnectivityStatusAction;

/**
 * Action creator for setting the connectivity status.
 *
 * @param isInternetOn - Boolean indicating whether the internet is on or off.
 * @returns The SetConnectivityStatus action.
 */
export const setConnectivityStatus = (
  isInternetOn: boolean,
): SetConnectivityStatusAction => ({
  type: SET_CONNECTIVITY_STATUS,
  payload: isInternetOn,
});
