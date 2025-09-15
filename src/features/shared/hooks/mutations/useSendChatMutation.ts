import { CHATTING_LIST_QUERY_KEY } from '@/features/shared/hooks/queries/useGetChattingList';
import type { SendChatDto } from '@/features/shared/types/dto';
import { getDay } from '@/features/shared/utils/day';
import { APIClient } from '@/modules/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { toast } from 'sonner';

const sendChat = async (content: string) => {
  const { year, month, day } = getDay();
  const { data } = await APIClient.post<SendChatDto>('/api/v2/chats/message-test', { content, year, month, day });

  return data.result;
};

export const useSendChatMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendChat,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [CHATTING_LIST_QUERY_KEY] }),
    onError: (error) => {
      if (isAxiosError(error)) {
        toast(`useSendChatMutation 실패: ${error.response?.data.code}`);
      }
    },
  });
};
