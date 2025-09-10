/** 요청 대기큐에 들어가는 원소 */
export type PendingApiCallback = (newAccessToken: string) => void;

export type RefreshDto = {
  accessToken: string;
  refreshToken: string;
};
