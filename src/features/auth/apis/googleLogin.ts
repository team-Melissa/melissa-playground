import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI } from '@/constants/env';
import { GOOGLE_CONTENT_TYPE, GOOGLE_ID_TOKEN_URI, GOOGLE_LOGIN_URI, GRANT_TYPE } from '@/features/auth/constants';
import type { GoogleTokenDTO, LoginDTO } from '@/features/auth/types';
import axios from 'axios';

export const getGoogleIdToken = async (code: string) => {
  const { data } = await axios.post<GoogleTokenDTO>(
    GOOGLE_ID_TOKEN_URI,
    {
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      grant_type: GRANT_TYPE,
      redirect_uri: GOOGLE_REDIRECT_URI,
    },
    { headers: { 'Content-Type': GOOGLE_CONTENT_TYPE } }
  );

  return data.id_token;
};

export const googleLogin = async (idToken: string) => {
  const { data } = await axios.post<LoginDTO>(GOOGLE_LOGIN_URI, {
    idToken,
  });

  return data.result;
};
