import { Button } from '@/components/ui/button';
import IconGoogle from '@/features/auth/components/icons/IconGoogle';
import IconKakao from '@/features/auth/components/icons/IconKakao';
import type { OAuthProvider } from '@/features/auth/types';
import type { PropsWithChildren, ReactNode } from 'react';

type Props = {
  oauthProvider: OAuthProvider;
  onClick: (oauthProvider: OAuthProvider) => Promise<boolean>;
};

const iconMap = {
  kakao: <IconKakao />,
  google: <IconGoogle />,
} satisfies Record<OAuthProvider, ReactNode>;

const buttonVariantMap = {
  kakao: 'bg-yellow-300 hover:bg-yellow-400 text-black',
  google: 'bg-white hover:bg-gray-300 text-gray-900',
} satisfies Record<OAuthProvider, string>;

export default function LoginButton({ oauthProvider, onClick, children }: PropsWithChildren<Props>) {
  const Icon = iconMap[oauthProvider];
  const buttonVariant = buttonVariantMap[oauthProvider];

  return (
    <Button className={buttonVariant} onClick={() => onClick(oauthProvider)}>
      {Icon} <p>{children}</p>
    </Button>
  );
}
