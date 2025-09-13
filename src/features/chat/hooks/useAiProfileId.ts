import { useRouter } from 'next/router';

export const useAiProfileId = () => {
  const router = useRouter();
  const aiProfileId = (Number(router.query.aiProfileId) ?? null) as number | null;

  return aiProfileId;
};
