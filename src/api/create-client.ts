import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

export default function (
  baseURL: string,
  token?: string,
  options?: CreateAxiosDefaults
): AxiosInstance {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    timeout: 3000,
    ...options,
  });
}
