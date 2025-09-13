import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

const KAKAO_LOGIN_URI = '/api/login/kakao?nextUri=/home';
const GOOGLE_LOGIN_URI = '/api/login/google?nextUri=/home';

export default function LoginContainer() {
  const router = useRouter();

  const goToLogin = (url: string) => {
    return router.push(url);
  };

  return (
    <div>
      <Button onClick={() => goToLogin(KAKAO_LOGIN_URI)}>카카오 로그인</Button>
    </div>
  );
}
