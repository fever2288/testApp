import walletsReducer from '../reducer';
import {
  GET_WALLETS,
  GET_WALLETS_SUCCESS,
  GET_WALLETS_FAIL,
  WalletsActionTypes,
} from '../actions';

describe('walletsReducer', () => {
  const initialState = {
    allWallets: [],
    error: false,
  };

  it('should return the initial state', () => {
    // Cast the action to `any` to bypass TypeScript type checking for this test case.
    expect(walletsReducer(undefined, { type: '' } as any)).toEqual(
      initialState,
    );
  });

  it('should handle GET_WALLETS', () => {
    const action: WalletsActionTypes = {
      type: GET_WALLETS,
      payload: { onFinish: jest.fn() },
    };
    const expectedState = {
      allWallets: [],
      error: false,
    };
    expect(walletsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_WALLETS_SUCCESS', () => {
    const mockWallets = [
      {
        accountId: '123',
        companyName: 'Company A',
        amount: { amount: '1000', currency: 'USD' },
        creditDebitIndicator: 'credit',
        datetime: '2024-07-27T00:00:00Z',
      },
    ];
    const action: WalletsActionTypes = {
      type: GET_WALLETS_SUCCESS,
      payload: { allWallets: mockWallets },
    };
    const expectedState = {
      allWallets: mockWallets,
      error: false,
    };
    expect(walletsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_WALLETS_FAIL', () => {
    const mockError = 'An error occurred';
    const action: WalletsActionTypes = {
      type: GET_WALLETS_FAIL,
      payload: { error: mockError },
    };
    const expectedState = {
      allWallets: [],
      error: mockError,
    };
    expect(walletsReducer(initialState, action)).toEqual(expectedState);
  });
});
