import { KAKAO_REDIRECT_URI, KAKAO_REST_API_KEY, SERVER_URL } from '@/constants/env';
import type { KakaoTokenDTO, LoginDTO } from '@/features/auth/types';
import axios from 'axios';

export const getKakaoToken = async (code: string) => {
  const { data } = await axios.post<KakaoTokenDTO>(
    'https://kauth.kakao.com/oauth/token',
    {
      grant_type: 'authorization_code',
      client_id: KAKAO_REST_API_KEY,
      redirect_uri: KAKAO_REDIRECT_URI,
      code,
    },
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
    }
  );

  return data.access_token;
};

export const kakaoLogin = async (kakaoToken: string) => {
  const { data } = await axios.post<LoginDTO>(`${SERVER_URL}/api/v1/auth/kakao`, {
    accessToken: kakaoToken,
  });

  return data.result;
};
