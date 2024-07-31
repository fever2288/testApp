import {
  GET_WALLETS,
  GET_WALLETS_SUCCESS,
  GET_WALLETS_FAIL,
  getWallets,
  getWalletsSuccess,
  getWalletsFail,
} from '../actions';
import { Wallet } from '../../../../types/wallet.types';

describe('wallets actions', () => {
  it('should create an action to get wallets', () => {
    const onFinish = jest.fn();
    const expectedAction = {
      type: GET_WALLETS,
      payload: { onFinish },
    };
    expect(getWallets({ onFinish })).toEqual(expectedAction);
  });

  it('should create an action to get wallets success', () => {
    const mockWallets: Wallet[] = [
      {
        accountId: '123',
        companyName: 'Company A',
        amount: { amount: '1000', currency: 'USD' },
        creditDebitIndicator: 'credit',
        datetime: '2024-07-27T00:00:00Z',
      },
    ];
    const expectedAction = {
      type: GET_WALLETS_SUCCESS,
      payload: { allWallets: mockWallets },
    };
    expect(getWalletsSuccess({ allWallets: mockWallets })).toEqual(
      expectedAction,
    );
  });

  it('should create an action to get wallets fail', () => {
    const mockError = 'An error occurred';
    const expectedAction = {
      type: GET_WALLETS_FAIL,
      payload: { error: mockError },
    };
    expect(getWalletsFail({ error: mockError })).toEqual(expectedAction);
  });
});
