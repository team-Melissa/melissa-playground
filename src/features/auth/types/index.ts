export type OAuthProvider = 'kakao' | 'google';

export type KakaoTokenDTO = {
  token_type: string;
  access_token: string;
  id_token?: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope?: string;
};

export type LoginDTO = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    userId: number;
    oauthProvider: string;
    email: string;
    nickname: string;
    accessToken: string;
    refreshToken: string;
    tokenType: string;
  };
};
