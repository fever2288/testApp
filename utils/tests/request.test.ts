import request from '../request';

import camelize from 'camelize-ts';

jest.mock('../env', () => ({
  host: 'http://192.168.0.19:3005',
}));

jest.mock('../api', () => ({
  ENDPOINT_GET_WALLETS: 'ENDPOINT_GET_WALLETS',
  __esModule: true,
  default: {
    ENDPOINT_GET_WALLETS: {
      uri: '/wallets',
    },
  },
}));

describe('request', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should make a GET request and return transformed data', async () => {
    const mockResponse = {
      account_id: '3230bd7e-cb4c-553c-bcd3-607f3a3f8e20',
      company_name: 'Business Example LTD',
      amount: {
        amount: '198395.3700',
        currency: 'USD',
      },
      credit_debit_indicator: 'Credit',
      datetime: '2024-07-27T00:00:00Z',
    };

    const transformedResponse = camelize(mockResponse);

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const data = await request<typeof transformedResponse>({
      endpoint: 'ENDPOINT_GET_WALLETS',
    });

    expect(global.fetch).toHaveBeenCalledWith(
      'http://192.168.0.19:3005/wallets',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    expect(data).toEqual(transformedResponse);
  });

  it('should throw an error for a failed request', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    await expect(
      request<{ data: string }>({ endpoint: 'ENDPOINT_GET_WALLETS' }),
    ).rejects.toThrow('Error: 404 Not Found');
  });

  it('should throw an error for a fetch exception', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network Error'));

    await expect(
      request<{ data: string }>({ endpoint: 'ENDPOINT_GET_WALLETS' }),
    ).rejects.toThrow('Network Error');
  });
});
