import { getNewToken } from '@/modules/axios/api/getNewToken';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/modules/axios/constants';
import { type PendingApiCallback } from '@/modules/axios/types';
import axios, { type AxiosError } from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import Router from 'next/router';

let isRefreshing = false;

let pendingApiQueue: PendingApiCallback[] = [];

export const clientResponseErrorInterceptor = async (error: AxiosError) => {
  const requestConfig = error.config;
  const refreshToken = getCookie(REFRESH_TOKEN_KEY);

  if (!requestConfig || !refreshToken || error.response?.status !== 401) {
    return Promise.reject(error);
  }

  if (isRefreshing) {
    return new Promise((resolve) => {
      pendingApiQueue.push((newAccessToken) => {
        requestConfig.headers.Authorization = `Bearer ${newAccessToken}`;
        resolve(axios(requestConfig));
      });
    });
  }

  try {
    isRefreshing = true;
    const newTokens = await getNewToken(refreshToken);

    setCookie(ACCESS_TOKEN_KEY, newTokens.accessToken);
    setCookie(REFRESH_TOKEN_KEY, newTokens.refreshToken);

    pendingApiQueue.forEach((pendingApiCallback) => pendingApiCallback(newTokens.accessToken));
    requestConfig.headers.Authorization = `Bearer ${newTokens.accessToken}`;
    return axios(requestConfig);
  } catch (err) {
    deleteCookie(ACCESS_TOKEN_KEY);
    deleteCookie(REFRESH_TOKEN_KEY);

    await Router.replace(`/login?next=${encodeURIComponent(Router.asPath)}`);
    return Promise.reject(err);
  } finally {
    pendingApiQueue = [];
    isRefreshing = false;
  }
};
