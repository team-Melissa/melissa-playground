import { type OAuthProvider } from '@/features/auth/types';

export const LOGIN_URI_MAP = {
  kakao: '/api/login/kakao',
  google: '/api/login/google',
} satisfies Record<OAuthProvider, string>;
