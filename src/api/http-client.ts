import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const headers: Readonly<Record<string, string>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
};

const http = axios.create({
  baseURL: 'http://localhost:3001',
  headers,
});

const request = <T = any, R = AxiosResponse<T>>(
  config: AxiosRequestConfig
): Promise<R> => http.request(config);
const get = <T = any, R = AxiosResponse<T>>(
  url: string,
  config?: AxiosRequestConfig
): Promise<R> => http.get(url, config);
const post = <T = any, R = AxiosResponse<T>>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<R> => http.post(url, data, config);
const put = <T = any, R = AxiosResponse<T>>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<R> => http.put(url, data, config);
const del = <T = any, R = AxiosResponse<T>>(
  url: string,
  config?: AxiosRequestConfig
): Promise<R> => http.delete<T, R>(url, config);

export { request, get, post, put, del };
