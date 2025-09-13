import LoginButton from '@/features/auth/components/LoginButton';
import { CLIENT_LOGIN_URI_MAP } from '@/features/auth/constants';
import { type OAuthProvider } from '@/features/auth/types';
import { useRouter } from 'next/router';

export default function LoginContainer() {
  const router = useRouter();
  const nextUri = (router.query.nextUri ?? '/home') as string;

  const goToLogin = (oauthProvider: OAuthProvider) => {
    const destination = `${CLIENT_LOGIN_URI_MAP[oauthProvider]}?nextUri=${nextUri}`;
    return router.push(destination);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-xl font-bold text-center text-gray-900 mb-8">Melissa Playground</h1>
        <div className="flex flex-col gap-4">
          <LoginButton oauthProvider="kakao" onClick={goToLogin}>
            카카오 로그인
          </LoginButton>
          <LoginButton oauthProvider="google" onClick={goToLogin}>
            구글 로그인
          </LoginButton>
        </div>
      </div>
    </div>
  );
}
