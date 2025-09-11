import { SERVER_URL } from '@/modules/axios/constants';
import { type RefreshDto } from '@/modules/axios/types';
import axios from 'axios';

export const getNewToken = async (refreshToken: string) => {
  const { data } = await axios.post<RefreshDto>(`${SERVER_URL}/api/v1/auth/refresh`, undefined, {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return data;
};
