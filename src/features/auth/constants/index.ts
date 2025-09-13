import { SERVER_URL } from '@/constants/env';
import type { OAuthProvider } from '@/features/auth/types';

export const KAKAO_TOKEN_URI = 'https://kauth.kakao.com/oauth/token';
export const GOOGLE_ID_TOKEN_URI = 'https://oauth2.googleapis.com/token';
export const GRANT_TYPE = 'authorization_code';

export const KAKAO_CONTENT_TYPE = 'application/x-www-form-urlencoded;charset=utf-8';
export const GOOGLE_CONTENT_TYPE = 'application/x-www-form-urlencoded';

export const KAKAO_LOGIN_URI = `${SERVER_URL}/api/v1/auth/kakao`;
export const GOOGLE_LOGIN_URI = `${SERVER_URL}/api/v1/auth/google`;

export const CLIENT_LOGIN_URI_MAP = {
  kakao: '/api/login/kakao',
  google: '/api/login/google',
} satisfies Record<OAuthProvider, string>;
