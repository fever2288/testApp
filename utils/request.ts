import { host } from './env';
import appEndpoints from './api';
import camelize from 'camelize-ts';

interface RequestData {
  endpoint: keyof typeof appEndpoints;
  data?: any;
  method?: 'GET' | 'POST';
}

/**
 * Makes an HTTP request to a specified endpoint and returns the transformed response.
 *
 * @async
 * @function
 * @template T - The type of the response data.
 * @param {RequestData} requestData - The request configuration including endpoint, data, and method.
 * @returns {Promise<T>} A promise that resolves to the transformed response data.
 *
 * @throws {Error} Throws an error if the request fails or the response is not ok.
 *
 */
export default async function request<T>(requestData: RequestData): Promise<T> {
  const { endpoint, data, method = 'GET' } = requestData;
  const url = getUrl(endpoint);

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method !== 'GET' && data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const transformedResponse = await response.json();
    return camelize(transformedResponse) as unknown as T;
  } catch (error) {
    throw error;
  }
}

/**
 * Constructs the full URL for a given endpoint by appending it to the base host URL.
 *
 * @function
 * @param {keyof typeof appEndpoints} endpoint - The endpoint key to retrieve the URI.
 * @returns {string} The full URL constructed from the base host and the endpoint URI.
 *
 */
const getUrl = (endpoint: keyof typeof appEndpoints): string => {
  const { uri } = appEndpoints[endpoint];
  return host + uri;
};
