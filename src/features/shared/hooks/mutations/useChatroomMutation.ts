import type { MakeChatRoomDto } from '@/features/shared/types/dto';
import { getDay } from '@/features/shared/utils/day';
import { APIClient } from '@/modules/axios';
import { useMutation } from '@tanstack/react-query';
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
  return useMutation({
    mutationFn: postChatroom,
    onSuccess: () => toast('채팅방 생성 완료'),
    onError: (error) => {
      if (isAxiosError(error)) {
        toast(`useChatroomMutation 실패: ${error.response?.data.code}`);
      }
    },
  });
};
