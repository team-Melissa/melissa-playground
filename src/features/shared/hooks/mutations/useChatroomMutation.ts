import { AI_PROFILES_QUERY_KEY } from '@/features/shared/hooks/queries/useGetAiProfiles';
import { CHATTING_LIST_QUERY_KEY } from '@/features/shared/hooks/queries/useGetChattingList';
import type { MakeChatRoomDto } from '@/features/shared/types/dto';
import { getDay } from '@/features/shared/utils/day';
import { APIClient } from '@/modules/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { toast } from 'sonner';

const postChatroom = async (aiProfileId: number) => {
  const { year, month, day } = getDay();

  const { data } = await APIClient.post<MakeChatRoomDto>('/api/v1/chats', undefined, {
    params: { aiProfileId, year, month, day },
  });

  return data.result;
};

export const useChatroomMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postChatroom,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [AI_PROFILES_QUERY_KEY] });
      await queryClient.invalidateQueries({ queryKey: [CHATTING_LIST_QUERY_KEY] });
      toast('채팅방 생성 완료');
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast(`useChatroomMutation 실패: ${error.response?.data.code}`);
      }
    },
  });
};
