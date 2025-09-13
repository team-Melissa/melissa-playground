import { AI_PROFILES_QUERY_KEY } from '@/features/shared/hooks/queries/useGetAiProfiles';
import { type ChangeAiProfileDto } from '@/features/shared/types/dto';
import { getDay } from '@/features/shared/utils/day';
import { APIClient } from '@/modules/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const patchAiProfile = async (aiProfileId: number) => {
  const { year, month, day } = getDay();
  const { data } = await APIClient.patch<ChangeAiProfileDto>('/api/v1/chats/ai-profile', undefined, {
    params: { year, month, day, aiProfileId },
  });

  return data.result;
};

export const useChangeAiProfileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchAiProfile,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [AI_PROFILES_QUERY_KEY] }),
  });
};
