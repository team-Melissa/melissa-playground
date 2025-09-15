import { AI_PROFILES_QUERY_KEY } from '@/features/shared/hooks/queries/useGetAiProfiles';
import { CHATTING_LIST_QUERY_KEY } from '@/features/shared/hooks/queries/useGetChattingList';
import { type ChangeAiProfileDto } from '@/features/shared/types/dto';
import { getDay } from '@/features/shared/utils/day';
import { APIClient } from '@/modules/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

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
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [AI_PROFILES_QUERY_KEY] });
      await queryClient.invalidateQueries({ queryKey: [CHATTING_LIST_QUERY_KEY] });
    },
    onError: () => toast('useChangeAiProfileMutation 실패'),
  });
};
