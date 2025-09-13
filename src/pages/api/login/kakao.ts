import { KAKAO_REDIRECT_URI, KAKAO_REST_API_KEY } from '@/constants/env';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nextUri = req.query.nextUri ?? '/home';

  res.redirect(
    'https://kauth.kakao.com/oauth/authorize?' +
      `client_id=${KAKAO_REST_API_KEY}&` +
      `redirect_uri=${KAKAO_REDIRECT_URI}&` +
      `state=${nextUri}&` +
      'response_type=code'
  );
}
