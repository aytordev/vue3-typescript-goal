import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface HttpResponse<T = unknown> {
    status: number;
    msg: string;
    code: number;
    data: T;
}

enum StatusCode {
    Unauthorized = 401,
    Forbidden = 403,
    TooManyRequests = 429,
    InternalServerError = 500,
}

const headers: Readonly<Record<string, string>> = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
};

const http = axios.create({
    baseURL: 'http://localhost:3000',
    headers,
});

http.interceptors.response.use(
    (response: AxiosResponse<HttpResponse>) => response,
    (error) => {
        const { status } = error;

        switch (status) {
            case StatusCode.InternalServerError: {
                // Handle InternalServerError
                break;
            }
            case StatusCode.Forbidden: {
                // Handle Forbidden
                break;
            }
            case StatusCode.Unauthorized: {
                // Handle Unauthorized
                break;
            }
            case StatusCode.TooManyRequests: {
                // Handle TooManyRequests
                break;
            }
        }

        return Promise.reject(error);
    }
);

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
