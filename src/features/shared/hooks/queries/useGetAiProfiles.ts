import type { AiProfilesDto } from '@/features/shared/types/dto';
import { APIClient } from '@/modules/axios';
import { useQuery } from '@tanstack/react-query';

const getAiProfiles = async () => {
  const { data } = await APIClient.get<AiProfilesDto>('/api/v1/ai-profiles');
  return data.result;
};

export const AI_PROFILES_QUERY_KEY = 'AI_PROFILES_QUERY_KEY';

export const useGetAiProfiles = () => {
  return useQuery({
    queryFn: getAiProfiles,
    queryKey: [AI_PROFILES_QUERY_KEY],
  });
};
