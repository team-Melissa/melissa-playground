import type { MakeChatRoomDto } from '@/features/shared/types/dto';
import { getDay } from '@/features/shared/utils/day';
import { APIClient } from '@/modules/axios';
import { useMutation } from '@tanstack/react-query';

const postChatroom = async (aiProfileId: number) => {
  const { year, month, day } = getDay();

  const { data } = await APIClient.post<MakeChatRoomDto>('/api/v1/chats', undefined, {
    params: { aiProfileId, year, month, day },
  });

  return data;
};

export const useChatroomMutation = () => {
  return useMutation({
    mutationFn: postChatroom,
  });
};
