import { call } from 'redux-saga/effects';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { getWalletsSaga, getWalletsSagaWatcher } from '../sagas';
import {
  GET_WALLETS,
  getWalletsSuccess,
  getWalletsFail,
  WalletsActionTypes,
} from '../actions';
import { Wallet } from '../../../../types/wallet.types';
import request from '../../../../utils/request';
import { ENDPOINT_GET_WALLETS } from '../../../../utils/api';

// Mock data
const mockWallets: Wallet[] = [
  {
    accountId: '123',
    companyName: 'Company A',
    amount: { amount: '1000', currency: 'USD' },
    creditDebitIndicator: 'credit',
    datetime: '2024-07-27T00:00:00Z',
  },
];

const mockResult = mockWallets;
const mockError = new Error('An error occurred');

const action: WalletsActionTypes = {
  type: GET_WALLETS,
  payload: {
    onFinish: jest.fn(),
  },
};

describe('getWalletsSaga', () => {
  it('handles success case', () => {
    return expectSaga(getWalletsSaga, action)
      .provide([
        [call(request, { endpoint: ENDPOINT_GET_WALLETS }), mockResult],
      ])
      .put(getWalletsSuccess({ allWallets: mockResult }))
      .run()
      .then(() => {
        expect(action.payload.onFinish).toHaveBeenCalled();
      });
  });

  it('handles failure case', () => {
    return expectSaga(getWalletsSaga, action)
      .provide([
        [
          call(request, { endpoint: ENDPOINT_GET_WALLETS }),
          Promise.reject(mockError),
        ],
      ])
      .put(getWalletsFail({ error: mockError.message }))
      .run()
      .then(() => {
        expect(action.payload.onFinish).toHaveBeenCalled();
      });
  });
});

describe('getWalletsSagaWatcher', () => {
  it('watches GET_WALLETS action', () => {
    testSaga(getWalletsSagaWatcher)
      .next()
      .takeLatest(GET_WALLETS, getWalletsSaga)
      .finish()
      .isDone();
  });
});
