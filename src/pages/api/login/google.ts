import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from '@/constants/env';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nextUri = req.query.nextUri ?? '/home';

  res.redirect(
    'https://accounts.google.com/o/oauth2/v2/auth?' +
      `client_id=${GOOGLE_CLIENT_ID}&` +
      `redirect_uri=${GOOGLE_REDIRECT_URI}&` +
      'response_type=code&' +
      'scope=openid%20email%20profile&' +
      `state=${nextUri}`
  );
}
