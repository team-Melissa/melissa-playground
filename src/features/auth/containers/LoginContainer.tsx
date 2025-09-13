import { Button } from '@/components/ui/button';
import { LOGIN_URI_MAP } from '@/features/auth/constants';
import { type OAuthProvider } from '@/features/auth/types';
import { useRouter } from 'next/router';

export default function LoginContainer() {
  const router = useRouter();
  const nextUri = (router.query.nextUri ?? '/home') as string;

  const goToLogin = (oauthProvider: OAuthProvider) => {
    const destination = `${LOGIN_URI_MAP[oauthProvider]}?nextUri=${nextUri}`;
    return router.push(destination);
  };

  return (
    <div>
      <Button onClick={() => goToLogin('kakao')}>카카오 로그인</Button>
      <Button onClick={() => goToLogin('google')}>구글 로그인</Button>
    </div>
  );
}
