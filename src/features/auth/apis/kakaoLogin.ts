import { KAKAO_REDIRECT_URI, KAKAO_REST_API_KEY } from '@/constants/env';
import { GRANT_TYPE, KAKAO_CONTENT_TYPE, KAKAO_LOGIN_URI, KAKAO_TOKEN_URI } from '@/features/auth/constants';
import type { KakaoTokenDTO, LoginDTO } from '@/features/auth/types';
import axios from 'axios';

export const getKakaoToken = async (code: string) => {
  const { data } = await axios.post<KakaoTokenDTO>(
    KAKAO_TOKEN_URI,
    {
      grant_type: GRANT_TYPE,
      client_id: KAKAO_REST_API_KEY,
      redirect_uri: KAKAO_REDIRECT_URI,
      code,
    },
    { headers: { 'Content-Type': KAKAO_CONTENT_TYPE } }
  );

  return data.access_token;
};

export const kakaoLogin = async (kakaoToken: string) => {
  const { data } = await axios.post<LoginDTO>(KAKAO_LOGIN_URI, {
    accessToken: kakaoToken,
  });

  return data.result;
};
