import { getGoogleIdToken, googleLogin } from '@/features/auth/apis/googleLogin';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/modules/axios/constants';
import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const nextUri = (req.query.state ?? '/home') as string;
  const code = req.query.code as string | undefined;

  if (!code) throw new Error('구글 code 발급 실패');

  const idToken = await getGoogleIdToken(code);
  const { accessToken, refreshToken } = await googleLogin(idToken);

  res.setHeader('set-cookie', [
    serialize(ACCESS_TOKEN_KEY, accessToken, { path: '/', secure: true }),
    serialize(REFRESH_TOKEN_KEY, refreshToken, { path: '/', secure: true }),
  ]);

  res.redirect(302, nextUri);
}
