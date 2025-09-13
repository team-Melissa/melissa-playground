import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI, SERVER_URL } from '@/constants/env';
import type { GoogleTokenDTO, LoginDTO } from '@/features/auth/types';
import axios from 'axios';

export const getGoogleIdToken = async (code: string) => {
  const { data } = await axios.post<GoogleTokenDTO>('https://oauth2.googleapis.com/token', {
    code,
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: GOOGLE_REDIRECT_URI,
  });

  return data.id_token;
};

export const googleLogin = async (idToken: string) => {
  const { data } = await axios.post<LoginDTO>(`${SERVER_URL}/api/v1/auth/google`, {
    idToken,
  });

  return data.result;
};
