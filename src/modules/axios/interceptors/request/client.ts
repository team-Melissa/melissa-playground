import { ACCESS_TOKEN_KEY } from '@/modules/axios/constants';
import type { InternalAxiosRequestConfig } from 'axios';
import { getCookie } from 'cookies-next';

export const clientRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessToken = getCookie(ACCESS_TOKEN_KEY);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};
